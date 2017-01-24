using Microsoft.Azure;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System.Collections.Generic;
using System.Linq;

namespace CollegeCareerTracker2.CloudStorage
{
    public class TableStorageClient<T> where T : TableEntity
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
            table.Execute(insertOperation);
        }

        //olga
        public void DeleteTable(T entity)
        {
            TableOperation deleteOperation = TableOperation.Delete(entity);
            table.Execute(deleteOperation);
        }

    }
}