# Telegram Integration with Salesforce

## How to use
[Integrate Salesforce with Telegram to Engage with Customers](https://medium.com/@isunny/integrate-salesforce-with-telegram-to-engage-with-customers-c9672f1203b)


/*
Salesforce trigger 

Whenever Account phone fileds is updated then all related contact phone fileds should also get updated with parent Account's phone. 


trigger AccountTrigger on Account(after update){
	if(trigger.isAfter && trigger.isUpdate){
		AccountHandler.afterAccountPhoneUpdation(trigger.new,trigger.oldMap);
	}
}

public class AccountHandler{
	public static void afterAccountPhoneUpdation(List<Account> accList, Map<id,Account> accOldMap){
		Map<id,Account> accToConMap = new Map<id,Account>();
		if(!accList.isEmpty()){
			for(Account acc:accList){
				if(acc.Phone != null && acc.Phone != accOldMap?.get(acc.Id).Phone){
					accToConMap.put(acc.id, acc);
				}
			}
			
			if(!accToConMap.isEmpty()){
				List<Contact> conList = [Select id,name,phone from Contact where AccountId IN: accToConMap.keySet()];
				List<Contact> conListUpdate = new List<Contact>();
				if(!conlist.isEmpty()){
					for(Contact con : conList){
						con.Phone = accToConMap.get(con.AccountId).Phone;
						conListUpdate.add(con);
					}
				}
				
				if(!conListUpdate.isEmpty()){
					update conListUpdate;
				}
			}
		}
	}
}

*/
