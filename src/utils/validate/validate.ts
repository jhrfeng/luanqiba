export class ValidateUtil {
    constructor(){

    }
    
    isNull(val){
    	if(""==val || null==val || undefined===val)
    		return true
    	else
    		return false;
    }

    isNumber(nubmer){
    	var re = /^[0-9]+.?[0-9]*$/;
    	if (re.test(nubmer)) {
    		return true;
    	}
    	return false;
    }

}
