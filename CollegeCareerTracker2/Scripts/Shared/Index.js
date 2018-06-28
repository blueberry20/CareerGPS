



        $(document).ready(function () {
            var windowHeight = $(window).height();
            var selectedPaymentOption = "";
            var studentGradesArray = [];


            $('#signUpLink').click(function () {
                $('html, body').animate({ scrollTop: $('#parentStudentBox').offset().top }, 'slow');
            });

            //on phone open number screen for entering phone number
            $('input[type="tel"]').on('touchstart', function () {
                $(this).attr('type', 'number');
            });

            $('input[type="text"]').on('keydown blur', function () {
                $(this).attr('type', 'text');
            });

            function hideLogo() {
                $("#logoContainer").hide();
            }

            function showLogo() {
                $("#logoContainer").show();
            }


            $('#parentStartBtn').click(function () {
                hideLogo();
                $('#parentContactInformation').slideDown();
                $('#parentStudentBox').slideUp();
                $('.navbar-nav').hide();
                $('.navbar-toggle').hide();
                if ($(window).width() < 768) {
                    $('#logoContainer').hide();
                    $('#aboutUs').hide();
                    $('#howWorks').hide();
                }
                else {
                    $('#aboutUs').hide();
                    $('#howWorks').hide();
                }
            });


            $('#studentStartBtn').click(function () {
                $('#studentContactInformation1').slideDown();
                $('#parentStudentBox').slideUp();
                $('.navbar-nav').hide();
                $('.navbar-toggle').hide();

                if ($(window).width() < 768) {
                    $('#logoContainer').hide();
                    $('#aboutUs').hide();
                    $('#howWorks').hide();
                }
                else {
                    $('#aboutUs').hide();
                    $('#howWorks').hide();
                }
            });


            $('.goBackBtn').click(function () {
                var currentSlide = $(this).closest('.parentQuestions');
                $(currentSlide).slideUp();
                $(currentSlide).prev().slideDown();
                $(currentSlide).prev().find('.nextBtn').show();
            });

            //$('.continueBtn').click(function () {
            //    var currentSlide = $(this).closest('.parentQuestions');
            //    $(currentSlide).slideUp();
            //    $(currentSlide).next().slideDown();
            //});




            //when user clicks on radio button, move to next slide
            //$('.parentQuestions input[type="radio"]').on('click change', function (e) {
            //    var currentSlide = $(this).closest('.parentQuestions');
            //    var nextSlide = $(currentSlide).next();
            //    $(currentSlide).slideUp();
            //    $(nextSlide).slideDown('slow', function () {
            //        $(document).scrollTop(0);
            //        //on mobile recalculate window height
            //        if ($(window).width() < 768) {
            //            $('#frontPageOverlay').css({ 'min-height': $(nextSlide).height() + 50 });
            //            $('.mainContainer').css({ 'min-height': $(nextSlide).height() + 50 });
             
            //            if ($(nextSlide).attr('id') == "parentContactInformation" || $(nextSlide).attr('id') == "studentContactInformation1" || $(nextSlide).attr('id') == "studentContactInformation2") {
            //                $('.mainContainer').css({ 'background-image': 'none' });
            //                $('footer').hide();
            //            }
            //            else {
            //                $('.mainContainer').css({ 'background-image': '/Content/images/background1.jpg' });
            //                $('footer').show();
            //            }

            //        }
            //        else { //desktop
            //            if ($(nextSlide).attr('id') == "parentContactInformation" || $(nextSlide).attr('id') == "studentContactInformation1" || $(nextSlide).attr('id') == "studentContactInformation2") {
            //                $('footer').hide();
            //            }
            //        }
            //    });         
            //});

            //continue Btn after parent fills out contact info
            $('#parentContactContinueBtn').click(function () {
                validateAnswers();
            });

            $("#numberofstudents").change(function () {
                var numberOfTimes = parseInt($('#numberofstudents').val(), 10) + 1;
                $('#childrenGradesDiv').empty();
                for (var i = 1; i < numberOfTimes; i++) {
                    $('#childrenGradesDiv').append('<div class="form-group row"><label class ="shortLabel col-lg-4 col-md-4 col-sm-4 col-xs-12 required" for="childGrade'+i+'">Child '+ i+ ' Grade Level</label> <div  class="shortField col-lg-8 col-md-8 col-sm-8 col-xs-12"><select class="form-control required" id="childGrade'+i +'" name="childgrade" value="">' +
                     '<option disabled selected value>Select</option>' +
                     '<option value="freshman">Freshman</option>' +
                     '<option value="sophomore">Sophomore</option>' +
                     '<option value="junior">Junior</option>' +
                     '<option value="senior">Senior</option>' +
                     '<option value="other">Other</option>' +
                 '</select>' +
                 '<p class="displayError">Please fill out child\'s grade</p></div></div>' +
                      '');
                }
                if ($(window).width() < 768) {
                    $('.mainContainer').css('min-height', $('#parentContactInformation').height() + 50);
                    $('#frontPageOverlay').css('min-height', $('#parentContactInformation').height() + 50);
                }
            });


            $('.optionsWrapper').click(function () {
                selectedPaymentOption = $(this).attr("name");
                $(this).css({ "background-color": "#0da697" });
            })

            $('#submitParentBtn').click(function () {
                console.log(selectedPaymentOption)
                //check if the last question is answered and submit
                if (selectedPaymentOption == "") {
                    $('#paymentError').show();
                }
                else {
                    submitParentAnswers();
                }
            });

            function validateAnswers() {
                var valid = true;
                var errorList = [];

                //get student grades
                var numberOfTimes = parseInt($('#numberofstudents').val(), 10) + 1;
                for (var i = 1; i < numberOfTimes; i++) {
                    studentGradesArray.push($('#childGrade' + i).val());
                }

                $('.requireddd').each(function (index, element) {
                    var name = $(element).attr('name');
                    var value = $(element).val();
                    switch (name) {
                        case 'email':
                           
                            if (!validateEmail(value)) {
                                valid = false;
                                //errorList.push('email');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'phonenumber':
                            if (!validatePhone(value)) {
                                valid = false;
                                //errorList.push('phone number');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            } else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'firstname':
                            if (value.length < 2 || value == null) {
                                valid = false;
                                //errorList.push('name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'lastname':
                            if (value.length < 2 || value == null) {
                                valid = false;
                                //errorList.push('last name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'numberofstudents':
                            if (value == "" || value == null) {
                                valid = false;
                                //errorList.push('last name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'childgrade':
                            if (value == "" || value == null) {
                                valid = false;
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;

                            console.log(valid);

                            //default:
                            //    if (value == '' || value == null) {
                            //        valid = false;                              
                            //    }
                            //    break;
                    }
                });

                //if there are any errors display them
                if (!valid) {
                    $('html,body').animate({
                        scrollTop: $(".hasError").offset().top - 50
                    });
                    return false;
                }

                $(document).scrollTop(0);
                $('#parentContactInformation').hide();
                $('#termsQuestion').show();

                //on mobile recalculate window height
                //if ($(window).width() < 768) {
                //    //  $('.mainContainer').css({ 'height': $('#termsQuestion').height() + 50 })
                //    //  $('#frontPageOverlay').css('height', $('#termsQuestion').height() + 50);
                //    $('.mainContainer').css({ 'min-height': '100%' });
                //    $('#frontPageOverlay').css('min-height', '100%');
                //    $(footer).show();
                //}
            }

            function validatePhone(phone) {
                if (phone) {
                    var reg = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                    if (reg.test(phone)) {
                        //return emailExist(email);
                        return true;
                    }
                }
                return false;
            }
            function formatPhoneNumber(str) {
                var raw_number = str.replace(/([^0-9]|\.|\-|\(\))/g, '');
                var regex1 = /^1?([2-9]..)([2-9]..)(....)$/;
                if (!regex1.test(raw_number)) {
                    return "";
                } else {
                    return raw_number.replace(regex1, '$1$2$3');
                }
            }
            function validateEmail(email) {
                if (email) {
                    var reg = /^(([^<>()[\]\\.,;:\s@@\"]+(\.[^<>()[\]\\.,;:\s@@\"]+)*)|(\".+\"))@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (reg.test(email)) {
                        //return emailExist(email);
                        return true;
                    }
                }
                return false;
            }


            function submitParentAnswers() {
                $.ajax({
                    url: '/Home/getParentResponses',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        aptitude: $('input[name="aptitude"]:checked').val(),
                        careerexploration: $('input[name="careerexploration"]:checked').val(),
                        careerroadmapdevelopment: $('input[name="careerroadmapdevelopment"]:checked').val(),
                        studentachievementarchive: $('input[name="studentachievementarchive"]:checked').val(),
                        collegeselectionoptimizer: $('input[name="collegeselectionoptimizer"]:checked').val(),
                        collegeadmissionscheduler: $('input[name="collegeadmissionscheduler"]:checked').val(),
                        careerrewards: $('input[name="careerrewards"]:checked').val(),
                        habitbuilder: $('input[name="habitbuilder"]:checked').val(),
                        firstname: $('#firstname').val(),
                        lastname: $('#lastname').val(),
                        phonenumber: $('#phonenumber').val(),
                        email: $('#email').val(),
                        numberofstudents: $('#numberofstudents').val(),
                        studentgradesarray: JSON.stringify(studentGradesArray),
                        paymentpreference: $('input[name="paymentpreference"]:checked').val()
                    }
                }).success(function (response) {
                    console.log('success');   
                    $('#termsQuestion').hide();
                    $('#thankyouPage').show();
                    $(document).scrollTop(0);
                    $('.navbar-nav').show();
                    showLogo();
                   
                    if ($(window).width() < 768) {
                        $('.navbar-toggle').show();
                        $('.mainContainer').css({ 'min-height': $('#thankyouPage').height() + 50 });
                        $('#frontPageOverlay').css('min-height', $('#thankyouPage').height() + 50);
                        $('#frontPageOverlay').css('height', $('#thankyouPage').height() + 66);
                    }
                }).error(function (response) {
                    console.log('error');
                    console.log(response);
                    //remove when ajax returns success
                    $('#termsQuestion').hide();
                    $('#thankyouPage').show();
                    $(document).scrollTop(0);
                    $('.navbar-nav').show();
                    showLogo();
                   
                    if ($(window).width() < 768) {
                        $('.navbar-toggle').show();
                        $('.mainContainer').css({ 'min-height': $('#thankyouPage').height() + 50 });
                        $('#frontPageOverlay').css('min-height', $('#thankyouPage').height() + 50);
                        $('#frontPageOverlay').css('height', $('#thankyouPage').height() + 66);
                    }

                });
            }



            $('#studentContactContinueBtn').click(function () {
                validateStudentAnswersPart1();
            });


            $('#submitStudentBtn').click(function () {
                validateStudentAnswersPart2();
            });

            function validateStudentAnswersPart1() {
                var valid = true;
                var errorList = [];

                $('.required1').each(function (index, element) {
                    var name = $(element).attr('name');
                    var value = $(element).val();
                    switch (name) {
                        case 'emailStudent':
                            if (!validateEmail(value)) {
                                valid = false;
                                //errorList.push('email');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'phonenumberStudent':
                            if (!validatePhone(value)) {
                                valid = false;
                                //errorList.push('phone number');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            } else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'firstnameStudent':
                            if (value.length < 2 || value == null) {
                                valid = false;
                                //errorList.push('name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'lastnameStudent':
                            if (value.length < 2 || value == null) {
                                valid = false;
                                //errorList.push('last name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'childgradeStudent':
                            if (value == "" || value == null) {
                                valid = false;
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                      
                    }
                });

                //if there are any errors display them
                if (!valid) {
                    $('html,body').animate({
                        scrollTop: $(".hasError").offset().top - 50
                    });
                    return false;
                }
                //submitStudentAnswers();
                $(document).scrollTop(0);
                $('#studentContactInformation1').hide();
                $('#studentContactInformation2').show();

                //on mobile recalculate window height
                if ($(window).width() < 768) {
                    $('.mainContainer').css({ 'min-height': '100%' });
                    $('#frontPageOverlay').css('min-height', '100%');
                    $(footer).show();
                }
            }




            function validateStudentAnswersPart2() {
                var valid = true;
                var errorList = [];

                $('.required2').each(function (index, element) {
                    var name = $(element).attr('name');
                    var value = $(element).val();
                    switch (name) {                      
                        case 'firstnameParent':
                            if (value.length < 2 || value == null) {
                                valid = false;
                                //errorList.push('name');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'emailParent':
                            if (!validateEmail(value)) {
                                valid = false;
                                //errorList.push('email');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            }
                            else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'phonenumberParent':
                            if (!validatePhone(value)) {
                                valid = false;
                                //errorList.push('phone number');
                                $(element).closest('.shortField').find('.displayError').show();
                                $(element).addClass('hasError');
                            } else {
                                $(element).closest('.shortField').find('.displayError').hide();
                                $(element).removeClass('hasError');
                            }
                            break;
                        case 'checkbox':
                            if (!$(element).is(':checked')) {
                                valid = false;
                                $('.termsError').show();
                                $('.checkboxWrapper').addClass('hasError');
                                //errorList.push('you haven\'t agreed to terms and conditions');
                            } else {
                                //hide error
                                $('.termsError').hide();
                                $('.checkboxWrapper').removeClass('hasError');
                            }
                            break;

                            //default:
                            //    if (value == '' || value == null) {
                            //        valid = false;
                            //        alert('You must fill out this field');
                            //    }
                            //    break;
                    }
                });

                //if there are any errors display them
                if (!valid) {
                    $('html,body').animate({
                        scrollTop: $(".hasError").offset().top - 50
                    });
                    return false;
                }
                submitStudentAnswers();
            }

            function submitStudentAnswers() {
                $.ajax({
                    url: '/Home/getStudentResponses',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        firstname: $('#firstnameStudent').val(),
                        lastname: $('#lastnameStudent').val(),
                        phonenumber: $('#phonenumberStudent').val(),
                        email: $('#emailStudent').val(),
                        studentgrade: $('#childGradeStudent').val(),
                        parent1firstname: $('#firstnameParent').val(),
                        parent1phonenumber: $('#phonenumberParent').val(),
                        parent1email: $('#emailParent').val(),
                        parent2firstname: $('#firstnameParent2').val(),
                        parent2phonenumber: $('#phonenumberParent2').val(),
                        parent2email: $('#emailParent2').val()

                    }
                }).success(function (response) {
                    console.log('success');

                    $('#studentContactInformation2').hide();
                    $('#thankyouPageStudent').show();
                    $('#aboutUs').show();
                    $('#howWorks').show();
                    $(document).scrollTop(0);
                    $('.navbar-nav').show();

                    if ($(window).width() < 768) {
                        $('.navbar-toggle').show();
                        $('.mainContainer').css({ 'min-height': $('#thankyouPageStudent').height() + 50 });
                        $('#frontPageOverlay').css('min-height', $('#thankyouPageStudent').height() + 50);
                        $('#frontPageOverlay').css('height', $('#thankyouPageStudent').height() + 66);
                    }
                }).error(function (response) {
                    console.log('error');
                    console.log(response);
                    //remove code below when ajax returns success
                    $('#studentContactInformation2').hide();
                    $('#thankyouPageStudent').show();
                    $('#aboutUs').show();
                    $('#howWorks').show();
                    $(document).scrollTop(0);
                    $('.navbar-nav').show();

                    //comment this after backend is fixed
                    $('.navbar-toggle').show();
                    $('.mainContainer').css({ 'min-height': $('#thankyouPageStudent').height() + 50 });
                    $('#frontPageOverlay').css('min-height', $('#thankyouPageStudent').height() + 50);
                    $('#frontPageOverlay').css('height', $('#thankyouPageStudent').height() + 66);
                    ///////////////////////////////////////////
                   

                    if ($(window).width() < 768) {
                        $('.navbar-toggle').show();
                        $('.mainContainer').css({ 'min-height': $('#thankyouPageStudent').height() + 50 });
                        $('#frontPageOverlay').css('min-height', $('#thankyouPageStudent').height() + 50);
                        $('#frontPageOverlay').css('height', $('#thankyouPageStudent').height() + 66);
                    }

                });
            }

        })

