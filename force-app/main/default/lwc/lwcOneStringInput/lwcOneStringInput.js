import { LightningElement, wire, api } from 'lwc';
import sendMessage from '@salesforce/apex/TelegramCmpRemoter.sendMessage';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//import accountName from "@salesforce/apex/TelegramUtility.accountName";

//import getConstants from '@salesforce/apex/TelegramUtility.getAllConstants';

export default class LwcOneStringInput extends LightningElement {
    
    firstString; 
   
    
    @wire(sendMessage)
    sendMessage;

    
    

    @api recordId;

    accounts;
    error;

    
    stringChangeHandler(event){
        this.firstString = event.target.value;   
    }

    sendhandler(){
        sendMessage({contactId : this.recordId, messageBody : this.firstString });
        console.log('ss11'+accountName);
        // .then(response =>{
        //     //console.log('yesssss '+ response);
        //     this.accounts = response;
        //     console.log('ss11'+accountName);
           
            
            

        // })
        // .catch(error => {
        //     this.error = error;
        //     console.error(error.body.message + 'nhi ala');
        // });




        //console.log('Message from Telegram'+status_next);

        // .then(result =>{
        //     this.accounts = result;
        //     const toastMsg =  new  ShowToastEvent({
        //         title : 'Message has been send to Telegram',
        //         message : this.firstString + 'Message sent',
        //         variant : 'success',

        //     });
        //     this.dispatchEvent(toastMsg);
        //  })
        //  .catch(error =>{
        //  this.error = error;
        //  const toastMsg1 =  new  ShowToastEvent({
        //     title : 'Error',
        //     message : error.body.message,
        //     variant : 'error',

        // });
        // this.dispatchEvent(toastMsg1);
        //  })
             
    }
}