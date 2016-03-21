var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../framework/utils/ui-app-state", "../../framework/utils/ui-dialog-service", "./my-dialog"], function (require, exports, aurelia_framework_1, ui_app_state_1, ui_dialog_service_1, my_dialog_1) {
    var HomeDialogs = (function () {
        function HomeDialogs(appState, dialogService) {
            this.appState = appState;
            this.dialogService = dialogService;
            this.json = {
                "name": "CIRCLEM",
                "isCashAllowed": true,
                "isCreditCardAllowed": true,
                "isTempCardSupported": true,
                "hotels": [{
                        "businessKey": 4469,
                        "name": "Mövenpick Hotel Jumeirah Lakes Towers",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Bryan.Dmello@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Nosh Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Urban Bar & Kitchen",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Crema",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1208,
                        "name": "Mövenpick Hotel Bahrain",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ainsley.demel@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "BHR",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Silk's Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Gallery Lobby Lounge",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Flamingo Bar",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Palms Bar",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1230,
                        "name": "Mövenpick Resort & Spa Dead Sea",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Wahid.BaniHali@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Saraya",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Luigi's",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Chopsticks",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Grill",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Beach Lounge",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Khayyam Bar and Al Hana Lounge",
                                "sortOrder": 8,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Valley CafÉ and Bar",
                                "sortOrder": 9,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Splash Bar and Restaurant",
                                "sortOrder": 10,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Juice Bar",
                                "sortOrder": 11,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1229,
                        "name": "Mövenpick Resort & Residences Aqaba",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Fadi.Haddad@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 2,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Palm Court",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Red Sea Grill",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Shatt",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Bridge CafÉ and Terrace",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Sufra",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Nafoura",
                                "sortOrder": 8,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Abu Nawwas Fun Pub",
                                "sortOrder": 9,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Bakery Shop and CafÉ",
                                "sortOrder": 10,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1228,
                        "name": "Mövenpick Resort & Spa Tala Bay Aqaba",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, fikri.salameh@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 3,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Najel",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Casalingo",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Sejan",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Baraka Lounge",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Siraj Arguilah Terrace and Lounge",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Pop Pub",
                                "sortOrder": 8,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Mello - Chill Out Bar",
                                "sortOrder": 9,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Azure",
                                "sortOrder": 10,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1232,
                        "name": "Mövenpick Nabatean Castle Hotel",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Atef.Twaissi@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 4,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Madafa",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Nadeem",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1231,
                        "name": "Mövenpick Resort Petra",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Atef.Twaissi@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 5,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Saraya",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Iwan",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Maqaad Bar",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Multaqa",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Ghadeer",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Baraka",
                                "sortOrder": 8,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Pool Terrace",
                                "sortOrder": 9,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1194,
                        "name": "Mövenpick Hotel Kuwait",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, khairy.saadeldin@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "KWT",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Bays International",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Dente - Italian",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Cuts Churrascaria",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Tea Lounge",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Garden",
                                "sortOrder": 7,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1195,
                        "name": "Mövenpick Hotel & Resort Al Bida’a Kuwait",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, omar.elhelaly@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "KWT",
                        "sortOrder": 2,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Veranda Lobby CafÉ",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Beldani Seafood restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Breeze Restaurant",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Pool Bar",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1226,
                        "name": "Mövenpick Hotel Beirut",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, christian.penassou@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "LBN",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Bourj Al Hamam",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Hemingway Bar and Cigar Lounge",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Hurricane Swim Up Bar and Restaurant",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1227,
                        "name": "Mövenpick Hotel Doha",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, karam.nohra@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "QAT",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Seasons Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Piano Piano Bar",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "L'espresso",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 2522,
                        "name": "Mövenpick Tower & Suites Doha",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Peerukannu.Sharafudin@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "QAT",
                        "sortOrder": 2,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Animato",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Wok Mee Noodle House",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Lime Cafe'",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1236,
                        "name": "Mövenpick Hotel Al Khobar",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, tariq.shabbir@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Blue Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Maharaja By Vineet",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Le CafÉ",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Views",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 2563,
                        "name": "Mövenpick Hotel Jeddah",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, mousa.bahri@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 2,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Spices",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Views",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "DELICIA CAFÉ",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1235,
                        "name": "Mövenpick Resort Al Nawras Jeddah",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ali.helmy@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 3,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Wadaa Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Amwaj Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1234,
                        "name": "Madinah Mövenpick Hotel",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, amir.mhana@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 4,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Salam Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Marrakech",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Shiraz",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Rotana CafÉ",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1240,
                        "name": "Mövenpick Hotel Anwar Al Madinah",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, mohamed.hassanin@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 5,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Salam Main Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Rehab Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Taiba Restaurant",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1237,
                        "name": "Mövenpick Hotel & Residences Hajar Tower Makkah",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Mohamed.Reda@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 6,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Dewan Lounge",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Naim Lounge & Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Nasim Restaurant",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Firdous Restaurant",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Hajar Restaurant",
                                "sortOrder": 7,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1239,
                        "name": "Mövenpick Hotel Qassim",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, atef.desouki@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 7,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Nakheel Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Ciao Italian Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Dayaa Restaurant",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Le Gourmet Lobby Lounge",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1238,
                        "name": "Mövenpick Hotel & Resort Yanbu",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, mahmoud.abdelrahim@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 8,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Radwa Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Morjan Seafood restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Tea Leaves Cafe",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "La Terrace",
                                "sortOrder": 6,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 3028,
                        "name": "Mövenpick Beach Resort Al Khobar",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, tariq.shabbir@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 9,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Font Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Clubhouse Restaurant & Grill",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Azure Seafood Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1198,
                        "name": "Mövenpick Hotel Ibn Battuta Gate ",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, debdyuti.dasgupta@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Mistral",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Chor Bazaar",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Olive Tree",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Sicilia",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Shanghai Chic",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Moroc Lounge and Bar",
                                "sortOrder": 8,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Majilis",
                                "sortOrder": 9,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Al Bahoo",
                                "sortOrder": 10,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1197,
                        "name": "Mövenpick Hotel Apartments The Square Dubai",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ganeshan.padmanabhan@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 3,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Pool",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Spices",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1201,
                        "name": "Mövenpick Hotel Deira",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Shibu.Hameed@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 4,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Jigsaw",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Work in Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1196,
                        "name": "Mövenpick Hotel Jumeirah Beach",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Suresh.Menon@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 5,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Talk Restaurant & Lounge",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Falls Lobby Lounge",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "West Beach Bistro & Sports Lounge",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1197,
                        "name": "Mövenpick Hotel The Square",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 6,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Spices",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Pool",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 1199,
                        "name": "Oceana Beach Club, The Palm Jumeirah",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, debdyuti.dasgupta@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 7,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "West 14th",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Marina Bar",
                                "sortOrder": 4,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 2988,
                        "name": "Mövenpick Hotel & Apartments Bur Dubai",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, salah.khalil@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 7,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Fountain Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Chutneys",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Pool House",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Somerset's",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Fakhreldine",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Pulse",
                                "sortOrder": 8,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 3432,
                        "name": "Mövenpick Hotel & Spa Bangalore",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, rajesh.chaudhary@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "IND",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Obsidian",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "My Place",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Mezzaluna",
                                "sortOrder": 5,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 3949,
                        "name": "Mövenpick Hotel & Casino Cairo-Media City",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ayman.rashad@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "EGY",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Biba's Restaurant",
                                "sortOrder": 3,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "El Badia Restaurant",
                                "sortOrder": 4,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "The Lobby Lounge",
                                "sortOrder": 5,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Le Gourmet Shop",
                                "sortOrder": 6,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "La Terazza",
                                "sortOrder": 7,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Tea Garden",
                                "sortOrder": 8,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 4290,
                        "name": "Mövenpick Hotel Cairo Pyramids",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "EGY",
                        "sortOrder": 2,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 1,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5916,
                        "name": "Mövenpick Hotels & Resorts UAE – Airport",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - UAE Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "UAE",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - QAT Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, karam.nohra@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "QAT",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - KWT Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, khairy.saadeldin@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "KWT",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - JOR Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "JOR",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - SAU Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ali.helmy@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "SAU",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - BHR Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ainsley.demel@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "BHR",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - LBN Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, christian.penassou@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "LBN",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - EGY Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, ayman.rashad@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "EGY",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5570,
                        "name": "MH&R - IND Area",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Kailash.Soun@moevenpick.com, Bikash.Chatterjee@moevenpick.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, rajesh.chaudhary@moevenpick.com",
                        "preAuthFailureEmailTemplate": "\r\nThis is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "cancelFailureEmailTemplate": "\r\nThis is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br> \r\n",
                        "fulfillFailureEmailTemplate": "This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>\r\n",
                        "linkageFailureEmailTemplate": "\r\nThis is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>\r\n",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "\r\nPURCHASE CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.Package.Name <br>  \r\n<b>Hotel - </b> @Model.Hotel.Name <br> \r\n<b>Outlet - </b> @Model.Outlet.Name <br> <br> \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.PurchaseRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.PurchaseRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.PurchaseRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Receipt Number - </b> @Model.Membership.ActivationCode <br> \r\n<b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br> \r\n<b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br> \r\n<b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br> \r\n<b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br> \r\n<b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br> \r\n<b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br> \r\n<b>Email - </b> @Model.PurchaseRequest.Email <br>\r\n",
                        "renewalFailureEmailTemplate": "\r\nThis is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>\r\n",
                        "renewalSuccessEmailTemplate": "\r\nRENEWAL CONFIRMATION <br> \r\n\r\nThis is to inform you that \r\n@Model.User.UserName has successfully posted a purchase. <br> \r\n<b>Member Card Number - </b> \r\n@Model.Membership.CardNumber <br> \r\n<b>Package - </b> \r\n@Model.RenewalRequest.RenewalPackageItem <br>  \r\n<b>Payment Method - </b>  \r\n\r\n@if(Model.RenewalRequest.PaymentProcessor == 0) \r\n{ \r\n    <span>Cash</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 1)\r\n{\r\n    <span>Credit Card Recorder</span>\r\n}\r\nelse if (Model.RenewalRequest.PaymentProcessor == 2)\r\n{\r\n    <span>DataCash</span>\r\n}\r\nelse if(Model.RenewalRequest.PaymentProcessor == 3)\r\n{\r\n    <span>GlobalCollect</span>\r\n}\r\nelse\r\n{\r\n    <span>AliPay</span>\r\n} \r\n<br />\r\n\r\n<b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br> \r\n\r\nMEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br> \r\n<b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br> \r\n<b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br> \r\n<b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br> \r\n<b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br> \r\n<b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br> \r\n<b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br> \r\n<b>Email - </b> @Model.RenewalRequest.Email <br>\r\n",
                        "country": "IND",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }, {
                        "businessKey": 5696,
                        "name": "Mövenpick Hotel Riyadh",
                        "escalatedErrorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "errorNotificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com",
                        "notificationEmailAddresses": "circlem-in-house-sales-support@clubhotel.com, circlem-in-house-sales-accounting@clubhotel.com, Bryan.Dmello@moevenpick.com",
                        "preAuthFailureEmailTemplate": "  This is to inform you that a failure took place while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to pre-authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>  ",
                        "cancelFailureEmailTemplate": "  This is to inform you that a <span style=\"color:red;font-weight: bold\">cancellation request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.PurchaseRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>   ",
                        "fulfillFailureEmailTemplate": "  This is to inform you that a <span style=\"color:red;font-weight: bold\">fulfilment request for @Model.CreditCardRequest.CreditCardNumber has failed </span> while attempting to make the following purchase/renewal by User: @Model.User.UserName . <br> Credit Card Number: @Model.CreditCardRequest.CreditCardNumber failed to authorize. <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b> Provider Error: </b> @Model.ProviderError <br>  ",
                        "linkageFailureEmailTemplate": "  This is to inform you that a linkage failure took place while attempting to make the following purchase/renwal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <b>Membership Number:</b> @Model.Membership.CardNumber <br>  ",
                        "purchaseFailureEmailTemplate": "This is to inform you that a purchase failure took place while attempting to make the following purchase by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>",
                        "purchaseSuccessEmailTemplate": "  PURCHASE CONFIRMATION <br>     This is to inform you that   @Model.User.UserName has successfully posted a purchase. <br>   <b>Member Card Number - </b>   @Model.Membership.CardNumber <br>   <b>Package - </b>   @Model.Package.Name <br>    <b>Hotel - </b> @Model.Hotel.Name <br>   <b>Outlet - </b> @Model.Outlet.Name <br> <br>   <b>Payment Method - </b>      @if(Model.PurchaseRequest.PaymentProcessor == 0)   {       <span>Cash</span>  }  else if (Model.PurchaseRequest.PaymentProcessor == 1)  {      <span>Credit Card Recorder</span>  }  else if (Model.PurchaseRequest.PaymentProcessor == 2)  {      <span>DataCash</span>  }  else if(Model.PurchaseRequest.PaymentProcessor == 3)  {      <span>GlobalCollect</span>  }  else  {      <span>AliPay</span>  }   <br />    <b>Receipt Number - </b> @Model.Membership.ActivationCode <br>   <b>Amount - </b> @(Model.Package.Price + Model.Package.Shipping) @Model.Package.Currency <br> <br>     MEMBER INFO <br> @Model.PurchaseRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br>   <b>Address Line 1 - </b> @(Model.PurchaseRequest.Address1 == null ? \"N/A\" : Model.PurchaseRequest.Address1) <br>   <b>Address Line 2 - </b> @(Model.PurchaseRequest.Address2 == null ? \"N/A\" : Model.PurchaseRequest.Address2) <br>   <b>City - </b> @(Model.PurchaseRequest.City == null ? \"N/A\" : Model.PurchaseRequest.City) <br>   <b>State - </b> @(Model.PurchaseRequest.State == null ? \"N/A\" : Model.PurchaseRequest.State) <br>   <b>Postal Code - </b> @(Model.PurchaseRequest.Postal == null ? \"N/A\" : Model.PurchaseRequest.Postal) <br>   <b>Country - </b> @(Model.PurchaseRequest.Country == null ? \"N/A\" : Model.PurchaseRequest.Country) <br>   <b>Email - </b> @Model.PurchaseRequest.Email <br>  ",
                        "renewalFailureEmailTemplate": "  This is to inform you that a renewal failure took place while attempting to make the following renewal by User: @Model.User.UserName . <br> <b>Hotel:</b> @Model.Hotel.Name <br> <b>Outlet:</b> @Model.Outlet.Name <br> <b>Package:</b> @Model.Package.Name <br> <br> <b> Mosaic Payload: </b> @Model.MosaicPayload <br> <b> Mosaic Error: </b> @Model.MosaicError <br>  ",
                        "renewalSuccessEmailTemplate": "  RENEWAL CONFIRMATION <br>     This is to inform you that   @Model.User.UserName has successfully posted a purchase. <br>   <b>Member Card Number - </b>   @Model.Membership.CardNumber <br>   <b>Package - </b>   @Model.RenewalRequest.RenewalPackageItem <br>    <b>Payment Method - </b>      @if(Model.RenewalRequest.PaymentProcessor == 0)   {       <span>Cash</span>  }  else if (Model.RenewalRequest.PaymentProcessor == 1)  {      <span>Credit Card Recorder</span>  }  else if (Model.RenewalRequest.PaymentProcessor == 2)  {      <span>DataCash</span>  }  else if(Model.RenewalRequest.PaymentProcessor == 3)  {      <span>GlobalCollect</span>  }  else  {      <span>AliPay</span>  }   <br />    <b>Amount - </b> @(Model.RenewalRequest.RenewalPrice + Model.RenewalRequest.RenewalShipping) @Model.RenewalRequest.RenewalCurrency <br> <br>     MEMBER INFO <br> @Model.RenewalRequest.Salutation @Model.Membership.FirstName @Model.Membership.LastName <br>   <b>Address Line 1 - </b> @(Model.RenewalRequest.ShippingAddress1 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress1) <br>   <b>Address Line 2 - </b> @(Model.RenewalRequest.ShippingAddress2 == null ? \"N/A\" : Model.RenewalRequest.ShippingAddress2) <br>   <b>City - </b> @(Model.RenewalRequest.ShippingCity == null ? \"N/A\" : Model.RenewalRequest.ShippingCity) <br>   <b>State - </b> @(Model.RenewalRequest.ShippingState == null ? \"N/A\" : Model.RenewalRequest.ShippingState) <br>   <b>Postal Code - </b> @(Model.RenewalRequest.ShippingPostal == null ? \"N/A\" : Model.RenewalRequest.ShippingPostal) <br>   <b>Country - </b> @(Model.RenewalRequest.ShippingCountry == null ? \"N/A\" : Model.RenewalRequest.ShippingCountry) <br>   <b>Email - </b> @Model.RenewalRequest.Email <br>  ",
                        "country": "SAU",
                        "sortOrder": 1,
                        "outlets": [{
                                "businessKey": -1,
                                "name": "Acacia By Pierre Gagnaire",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Naya",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Anardana",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Horizon",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Rotunda Lobby Lounge",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Cabana Pool Bar",
                                "sortOrder": 2,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Front Office",
                                "sortOrder": 0,
                                "isDisplay": true
                            }, {
                                "businessKey": -1,
                                "name": "Guest Relations",
                                "sortOrder": 1,
                                "isDisplay": true
                            }
                        ]
                    }
                ],
                "packages": [{
                        "businessKey": 2,
                        "mosaicId": -1,
                        "mosaicItemId": 12799,
                        "mosaicRevenueUnitId": 9849,
                        "mosaicCallCenterId": 2865,
                        "name": "Circle M UAE",
                        "country": "UAE",
                        "price": 896.0,
                        "shipping": 45.0,
                        "currency": "AED",
                        "tempCardPrefix": "971504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 3,
                        "mosaicId": -1,
                        "mosaicItemId": 12797,
                        "mosaicRevenueUnitId": 10658,
                        "mosaicCallCenterId": 3359,
                        "name": "Circle M Saudi Arabia",
                        "country": "SAU",
                        "price": 990.0,
                        "shipping": 45.0,
                        "currency": "SAR",
                        "tempCardPrefix": "966504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 4,
                        "mosaicId": -1,
                        "mosaicItemId": 14085,
                        "mosaicRevenueUnitId": 10656,
                        "mosaicCallCenterId": 3358,
                        "name": "Circle M Kuwait",
                        "country": "KWT",
                        "price": 75.0,
                        "shipping": 3.0,
                        "currency": "KWD",
                        "tempCardPrefix": "965504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 5,
                        "mosaicId": -1,
                        "mosaicItemId": 12791,
                        "mosaicRevenueUnitId": 10655,
                        "mosaicCallCenterId": 3357,
                        "name": "Circle M Jordan",
                        "country": "JOR",
                        "price": 173.0,
                        "shipping": 8.0,
                        "currency": "JOD",
                        "tempCardPrefix": "962504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 6,
                        "mosaicId": -1,
                        "mosaicItemId": 12795,
                        "mosaicRevenueUnitId": 10657,
                        "mosaicCallCenterId": 3360,
                        "name": "Circle M Qatar",
                        "country": "QAT",
                        "price": 888.0,
                        "shipping": 45.0,
                        "currency": "QAR",
                        "tempCardPrefix": "974504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 7,
                        "mosaicId": -1,
                        "mosaicItemId": 12789,
                        "mosaicRevenueUnitId": 10654,
                        "mosaicCallCenterId": 3356,
                        "name": "Circle M India",
                        "country": "IND",
                        "price": 7879.0,
                        "shipping": 200.0,
                        "currency": "INR",
                        "tempCardPrefix": "911504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 8,
                        "mosaicId": -1,
                        "mosaicItemId": 12787,
                        "mosaicRevenueUnitId": 10974,
                        "mosaicCallCenterId": 3577,
                        "name": "Circle M Egypt",
                        "country": "EGY",
                        "price": 870.0,
                        "shipping": 30.0,
                        "currency": "EGP",
                        "tempCardPrefix": "202504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 9,
                        "mosaicId": -1,
                        "mosaicItemId": 12785,
                        "mosaicRevenueUnitId": 13204,
                        "mosaicCallCenterId": 4885,
                        "name": "Circle M Bahrain",
                        "country": "BHR",
                        "price": 92.0,
                        "shipping": 4.0,
                        "currency": "BHD",
                        "tempCardPrefix": "973504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 10,
                        "mosaicId": -1,
                        "mosaicItemId": 12800,
                        "mosaicRevenueUnitId": 9849,
                        "mosaicCallCenterId": 2865,
                        "name": "Circle M UAE Renewal",
                        "country": "UAE",
                        "price": 896.0,
                        "shipping": 45.0,
                        "currency": "AED",
                        "tempCardPrefix": "971504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 11,
                        "mosaicId": -1,
                        "mosaicItemId": 12798,
                        "mosaicRevenueUnitId": 10658,
                        "mosaicCallCenterId": 3359,
                        "name": "Circle M Saudi Arabia Renewal",
                        "country": "SAU",
                        "price": 990.0,
                        "shipping": 45.0,
                        "currency": "SAR",
                        "tempCardPrefix": "966504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 12,
                        "mosaicId": -1,
                        "mosaicItemId": 14086,
                        "mosaicRevenueUnitId": 10656,
                        "mosaicCallCenterId": 3358,
                        "name": "Circle M Kuwait Renewal",
                        "country": "KWT",
                        "price": 80.0,
                        "shipping": 3.0,
                        "currency": "KWD",
                        "tempCardPrefix": "965504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 13,
                        "mosaicId": -1,
                        "mosaicItemId": 12792,
                        "mosaicRevenueUnitId": 10655,
                        "mosaicCallCenterId": 3357,
                        "name": "Circle M Jordan Renewal",
                        "country": "JOR",
                        "price": 173.0,
                        "shipping": 8.0,
                        "currency": "JOD",
                        "tempCardPrefix": "962504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 14,
                        "mosaicId": -1,
                        "mosaicItemId": 12796,
                        "mosaicRevenueUnitId": 10657,
                        "mosaicCallCenterId": 3360,
                        "name": "Circle M Qatar Renewal",
                        "country": "QAT",
                        "price": 888.0,
                        "shipping": 45.0,
                        "currency": "QAR",
                        "tempCardPrefix": "974504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 15,
                        "mosaicId": -1,
                        "mosaicItemId": 12790,
                        "mosaicRevenueUnitId": 10654,
                        "mosaicCallCenterId": 3356,
                        "name": "Circle M India Renewal",
                        "country": "IND",
                        "price": 7879.0,
                        "shipping": 200.0,
                        "currency": "INR",
                        "tempCardPrefix": "911504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 16,
                        "mosaicId": -1,
                        "mosaicItemId": 12788,
                        "mosaicRevenueUnitId": 10974,
                        "mosaicCallCenterId": 3577,
                        "name": "Circle M Egypt Renewal",
                        "country": "EGY",
                        "price": 870.0,
                        "shipping": 30.0,
                        "currency": "EGP",
                        "tempCardPrefix": "202504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 17,
                        "mosaicId": -1,
                        "mosaicItemId": 12786,
                        "mosaicRevenueUnitId": 13204,
                        "mosaicCallCenterId": 4885,
                        "name": "Circle M Bahrain Renewal",
                        "country": "BHR",
                        "price": 92.0,
                        "shipping": 4.0,
                        "currency": "BHD",
                        "tempCardPrefix": "973504445",
                        "sortOrder": 1,
                        "isDisplay": false,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 18,
                        "mosaicId": -1,
                        "mosaicItemId": 13354,
                        "mosaicRevenueUnitId": 9849,
                        "mosaicCallCenterId": 2865,
                        "name": "Circle-M App In-House Uae",
                        "country": "UAE",
                        "price": 896.0,
                        "shipping": 0.0,
                        "currency": "AED",
                        "tempCardPrefix": "971504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 19,
                        "mosaicId": -1,
                        "mosaicItemId": 13355,
                        "mosaicRevenueUnitId": 9849,
                        "mosaicCallCenterId": 2865,
                        "name": "Circle-M App In-House Uae Renewal\r\n",
                        "country": "UAE",
                        "price": 896.0,
                        "shipping": 0.0,
                        "currency": "AED",
                        "tempCardPrefix": "971504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 20,
                        "mosaicId": -1,
                        "mosaicItemId": 13352,
                        "mosaicRevenueUnitId": 10658,
                        "mosaicCallCenterId": 3359,
                        "name": "Circle-M App In-House Saudi",
                        "country": "SAU",
                        "price": 990.0,
                        "shipping": 0.0,
                        "currency": "SAR",
                        "tempCardPrefix": "966504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 21,
                        "mosaicId": -1,
                        "mosaicItemId": 13353,
                        "mosaicRevenueUnitId": 10658,
                        "mosaicCallCenterId": 3359,
                        "name": "Circle-M App In-House Saudi Renewal\r\n",
                        "country": "SAU",
                        "price": 990.0,
                        "shipping": 0.0,
                        "currency": "SAR",
                        "tempCardPrefix": "966504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 22,
                        "mosaicId": -1,
                        "mosaicItemId": 14087,
                        "mosaicRevenueUnitId": 10656,
                        "mosaicCallCenterId": 3358,
                        "name": "Circle-M App In-House Kuwait\r\n",
                        "country": "KWT",
                        "price": 75.0,
                        "shipping": 0.0,
                        "currency": "KWD",
                        "tempCardPrefix": "965504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 23,
                        "mosaicId": -1,
                        "mosaicItemId": 14088,
                        "mosaicRevenueUnitId": 10656,
                        "mosaicCallCenterId": 3358,
                        "name": "Circle-M App In-House Kuwait Renewal\r\n",
                        "country": "KWT",
                        "price": 80.0,
                        "shipping": 0.0,
                        "currency": "KWD",
                        "tempCardPrefix": "965504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 24,
                        "mosaicId": -1,
                        "mosaicItemId": 13347,
                        "mosaicRevenueUnitId": 10655,
                        "mosaicCallCenterId": 3357,
                        "name": "Circle-M App In-House Jordan\r\n",
                        "country": "JOR",
                        "price": 173.0,
                        "shipping": 0.0,
                        "currency": "JOD",
                        "tempCardPrefix": "962504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 25,
                        "mosaicId": -1,
                        "mosaicItemId": 13356,
                        "mosaicRevenueUnitId": 10655,
                        "mosaicCallCenterId": 3357,
                        "name": "Circle-M App In-House Jordan Renewal\r\n",
                        "country": "JOR",
                        "price": 173.0,
                        "shipping": 0.0,
                        "currency": "JOD",
                        "tempCardPrefix": "962504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 26,
                        "mosaicId": -1,
                        "mosaicItemId": 13350,
                        "mosaicRevenueUnitId": 10657,
                        "mosaicCallCenterId": 3360,
                        "name": "Circle-M App In-House Qatar\r\n",
                        "country": "QAT",
                        "price": 888.0,
                        "shipping": 0.0,
                        "currency": "QAR",
                        "tempCardPrefix": "974504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 27,
                        "mosaicId": -1,
                        "mosaicItemId": 13351,
                        "mosaicRevenueUnitId": 10657,
                        "mosaicCallCenterId": 3360,
                        "name": "Circle-M App In-House Qatar Renewal\r\n",
                        "country": "QAT",
                        "price": 888.0,
                        "shipping": 0.0,
                        "currency": "QAR",
                        "tempCardPrefix": "974504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 28,
                        "mosaicId": -1,
                        "mosaicItemId": 13345,
                        "mosaicRevenueUnitId": 10654,
                        "mosaicCallCenterId": 3356,
                        "name": "Circle-M App In-House India\r\n",
                        "country": "IND",
                        "price": 7879.0,
                        "shipping": 0.0,
                        "currency": "INR",
                        "tempCardPrefix": "911504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 29,
                        "mosaicId": -1,
                        "mosaicItemId": 13346,
                        "mosaicRevenueUnitId": 10654,
                        "mosaicCallCenterId": 3356,
                        "name": "Circle-M App In-House India Renewal\r\n",
                        "country": "IND",
                        "price": 7879.0,
                        "shipping": 0.0,
                        "currency": "INR",
                        "tempCardPrefix": "911504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 30,
                        "mosaicId": -1,
                        "mosaicItemId": 13343,
                        "mosaicRevenueUnitId": 13204,
                        "mosaicCallCenterId": 4885,
                        "name": "Circle-M App In-House Bahrain\r\n",
                        "country": "BHR",
                        "price": 92.0,
                        "shipping": 0.0,
                        "currency": "BHD",
                        "tempCardPrefix": "973504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }, {
                        "businessKey": 31,
                        "mosaicId": -1,
                        "mosaicItemId": 13344,
                        "mosaicRevenueUnitId": 13204,
                        "mosaicCallCenterId": 4885,
                        "name": "Circle-M App In-House Bahrain Renewal\r\n",
                        "country": "BHR",
                        "price": 92.0,
                        "shipping": 0.0,
                        "currency": "BHD",
                        "tempCardPrefix": "973504445",
                        "sortOrder": 1,
                        "isDisplay": true,
                        "paymentProcessors": [{
                                "type": 0,
                                "host": "cash-host",
                                "account": "cash-account",
                                "password": "cash-password"
                            }, {
                                "type": 1,
                                "host": "credit-card-recorder-host",
                                "account": "credit-card-recorder-account",
                                "password": "credit-card-recorder-password"
                            }
                        ]
                    }
                ],
                "users": [{
                        "userName": "MPBRN@movenpick.com",
                        "name": "MPBRN",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1208]
                    }, {
                        "userName": "MPDDS@movenpick.com",
                        "name": "MPDDS",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1230]
                    }, {
                        "userName": "MPAQB@movenpick.com",
                        "name": "MPAQB",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1229]
                    }, {
                        "userName": "MPTBA@movenpick.com",
                        "name": "MPTBA",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1228]
                    }, {
                        "userName": "MPNCP@movenpick.com",
                        "name": "MPNCP",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1232]
                    }, {
                        "userName": "MPPTH@movenpick.com",
                        "name": "MPPTH",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1231]
                    }, {
                        "userName": "MPKWT@movenpick.com",
                        "name": "MPKWT",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1194]
                    }, {
                        "userName": "MPABK@movenpick.com",
                        "name": "MPABK",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1195]
                    }, {
                        "userName": "MPBRT@movenpick.com",
                        "name": "MPBRT",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1226]
                    }, {
                        "userName": "MPDHA@movenpick.com",
                        "name": "MPDHA",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1227]
                    }, {
                        "userName": "MPDTS@movenpick.com",
                        "name": "MPDTS",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [2522]
                    }, {
                        "userName": "MPAKH@movenpick.com",
                        "name": "MPAKH",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1236]
                    }, {
                        "userName": "MPJCH@movenpick.com",
                        "name": "MPJCH",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [2563]
                    }, {
                        "userName": "MPANJ@movenpick.com",
                        "name": "MPANJ",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1235]
                    }, {
                        "userName": "MPMDH@movenpick.com",
                        "name": "MPMDH",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1234]
                    }, {
                        "userName": "MPANW@movenpick.com",
                        "name": "MPANW",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1240]
                    }, {
                        "userName": "MPHTM@movenpick.com",
                        "name": "MPHTM",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1237]
                    }, {
                        "userName": "MPQSM@movenpick.com",
                        "name": "MPQSM",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1239]
                    }, {
                        "userName": "MPYNU@movenpick.com",
                        "name": "MPYNU",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1238]
                    }, {
                        "userName": "MPAKR@movenpick.com",
                        "name": "MPAKR",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [3028]
                    }, {
                        "userName": "MPIBG@movenpick.com",
                        "name": "MPIBG",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1198]
                    }, {
                        "userName": "MPJLT@movenpick.com",
                        "name": "MPJLT",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [4469]
                    }, {
                        "userName": "MPTSQ@movenpick.com",
                        "name": "MPTSQ",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1197]
                    }, {
                        "userName": "MPDRA@movenpick.com",
                        "name": "MPDRA",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1201]
                    }, {
                        "userName": "MPJBR@movenpick.com",
                        "name": "MPJBR",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1196]
                    }, {
                        "userName": "MPTSQ@movenpick.com",
                        "name": "MPTSQ",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1197]
                    }, {
                        "userName": "MPOBC@movenpick.com",
                        "name": "MPOBC",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [1199]
                    }, {
                        "userName": "MPBRD@movenpick.com",
                        "name": "MPBRD",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [2988]
                    }, {
                        "userName": "MPBGL@movenpick.com",
                        "name": "MPBGL",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [3432]
                    }, {
                        "userName": "MPMCC@movenpick.com",
                        "name": "MPMCC",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [3949]
                    }, {
                        "userName": "MPCPH@movenpick.com",
                        "name": "MPCPH",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [4290]
                    }, {
                        "userName": "MPAREA@movenpick.com",
                        "name": "MRRENEWAL",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": true,
                        "permittedHotels": [5570, 5570, 5570, 5570, 5570, 5570, 5570, 5570, 5570]
                    }, {
                        "userName": "MPAIRP@movenpick.com",
                        "name": "MPAIRP",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [5916]
                    }, {
                        "userName": "mpryd@movenpick.com",
                        "name": "MPRYD",
                        "isActive": true,
                        "isNewAllowed": true,
                        "isRenewAllowed": false,
                        "permittedHotels": [5696]
                    }
                ]
            };
        }
        HomeDialogs.prototype.open = function () {
            this.dialogService.show(my_dialog_1.MyDialog);
        };
        HomeDialogs.prototype.modal = function () {
            this.dialogService.show(my_dialog_1.MyDialog, { modal: true });
        };
        HomeDialogs.prototype.confirm = function () {
            var _this = this;
            this.appState.notifyConfirm("Are you sure?")
                .then(function () {
                _this.appState.notifyInfo("YES!!!");
            })
                .catch(function () {
                _this.appState.notifyError("NO!!!");
            });
        };
        HomeDialogs.prototype.printJson = function () {
            console.log(JSON.stringify(this.json, null, 4));
        };
        HomeDialogs = __decorate([
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [ui_app_state_1.UIApplicationState, ui_dialog_service_1.UIDialogService])
        ], HomeDialogs);
        return HomeDialogs;
    })();
    exports.HomeDialogs = HomeDialogs;
});
