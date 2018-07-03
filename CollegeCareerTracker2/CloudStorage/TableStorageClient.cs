using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Collections.Generic;
using System.Linq;

namespace CollegeCareerTracker2.CloudStorage
{
    public class TableStorageClient<T> where T : ITableEntity
    {
        CloudTable table;

        public TableStorageClient(string tableName)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(
                CloudConfigurationManager.GetSetting("StorageConnectionString"));
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            table = tableClient.GetTableReference(tableName);

            table.CreateIfNotExists();
        }

        public void Add(T entity)
        {
            TableOperation insertOperation = TableOperation.Insert(entity);
            TableResult result = table.Execute(insertOperation);
        }

        //olga
        public void Delete(T entity)
        {
            TableOperation deleteOperation = TableOperation.Delete(entity);
            table.Execute(deleteOperation);
        }

        public List<T> RetriveAll<T>(T pEntity) where T : ITableEntity, new()
        {
            TableQuery<T> query = new TableQuery<T>();
            var returnValue = table.ExecuteQuery(query);
            return returnValue.ToList() as List<T>;
        }

        public List<T> RetriveAllForPartition<T>(string pPartitionKey, T pEntity) where T : ITableEntity, new()
        {
            TableQuery<T> query = new TableQuery<T>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, pPartitionKey));
            var returnValue = table.ExecuteQuery(query);
            return returnValue.ToList() as List<T>;
        }

        public void DeleteTable()
        {
            table.DeleteIfExists();
        }
    }
}