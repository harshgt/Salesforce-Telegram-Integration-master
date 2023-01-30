public class TelegramInvocable {
    
    //call from process builder
    //InvocableMethod --> used to invoke a single Apex method
    @InvocableMethod(label='Send Via Telegram' description='Send Message to Contact Via Telegram')

    public static void logData(List<MyInputClass> data) {
        Map<Id, String> contactMessage = new Map<Id, String>();
        for(MyInputClass contactData : data) {
            contactMessage.put(contactData.contactId, contactData.message);
        }
        for(Contact contact : [SELECT id,Telegram_User_ID__c FROM Contact WHERE Id in :contactMessage.keySet() AND Telegram_User_ID__c != null]) {
            sendMessage(Integer.valueOf(contact.Telegram_User_ID__c), contactMessage.get(contact.Id));
            
        }
    }
   

    @future(callout = true)
    private static void sendMessage(Integer userId, String reply) {
         //TelegramUtility.sendMessage(new TelegramUtility.Message(userId, reply));
    }
    
    public class MyInputClass {
        
        //get contactId and message from Process Builder.
        @InvocableVariable(label = 'Contact ID')
        public ID contactId; 
        @InvocableVariable(label = 'Message')
        public String message;
        
    }
}