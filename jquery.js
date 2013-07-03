$(document).ready(function(){
    var embedn=1;
    var prior,pid,login,atype,embed1,clink,slink,elink,mpblink,pplink,preq,steps,actr,specr,obs;
    function gatherInfo(){
        pid=$("#pid").val();
        login=$("#login").val();
        atype=$("#atype").val();
        embcodes=getEmbedCodes();
        clink=$("#clink").val();
        slink=$("#slink").val();
  	elink=$("#elink").val();
		mpblink=$("#mpblink").val();
		pplink=$("#pplink").val();
        preq=$("#preq").val();
        steps=$("#steps").val();
        actr=$("#actr").val();
        specr=$("#specr").val();
        obs=$("#obs").val();
        orig=$("#orig").val();
    }
    function generatePlaybackForm(){
        var form = "SUPPORT FINDINGS \n" + "\n" +
            "Key Information \n" + 
            "- ProviderId = " +  pid + "\n" +
            "- Login = " + login + "\n" +
            "- Account Type = " + atype + "\n" +
            "- embedCode(s) = " + embcodes + "\n" + "\n" +
            "- Customer Link Manifesting = " + clink + "\n" +
            "- Support Link Manifesting = " + slink + "\n" + "\n" +
			"- Manifesting Devices,Players and Browsers = " + mpblink + "\n" + "\n" +
			"- Players Platform Manifesting = " + pplink + "\n" + "\n" +
            "- Prerequisites \n" + preq + "\n" + "\n" +
            "- Steps to Reproduce \n" + steps + "\n" + "\n" +
            "- Actual Results \n" + actr + "\n" + "\n" +
            "- Expected Results \n" + specr + "\n" + "\n" +
            "- Observations \n" + obs + "\n" + "\n";
        $("#tareagen").val(form);
    }
	
	function generateOthersForm(){
        var form = "SUPPORT FINDINGS \n" + "\n" +
            "Key Information \n" + 
            "- ProviderId = " +  pid + "\n" +
            "- Login = " + login + "\n" +
            "- Account Type = " + atype + "\n" +
            "- embedCode(s) = " + embcodes + "\n" + "\n" +
            "- Customer Link Manifesting = " + clink + "\n" +           
			"- Support Link Manifesting = " + slink + "\n" + "\n" +
			"- Engineering Link Manifesting = " + elink + "\n" + "\n" +
            "- Prerequisites \n" + preq + "\n" + "\n" +
            "- Steps to Reproduce \n" + steps + "\n" + "\n" +
            "- Actual Results \n" + actr + "\n" + "\n" +
            "- Expected Results \n" + specr + "\n" + "\n" +
            "- Observations \n" + obs + "\n" + "\n";
        $("#tareagen").val(form);
    }
	
	
    $("#btngen").live("click",function(){
	   gatherInfo();
	   if (($("select option:selected").val() == 'play') && (pid != '' && login != '' && atype != '' && embcodes != '' && clink != '' && slink != '' && mpblink != '' && pplink != '' && preq != '' && steps != '' && actr != '' && specr != '' && obs != '' && orig != '') ) {
           generatePlaybackForm();
	   	}
        else if	($("select option:selected").val() == 'others' && (pid!= '' && login!= '' && atype!= '' && embcodes!= '' && clink!= '' && slink!= '' && elink!= '' && preq!= '' && steps!= '' && actr!= '' && specr!= '' && obs!= '' && orig!= '')) {
           generateOthersForm();
	   	}
		else {
			alert("Please fill in all the fields before clicking generate");
		}
		
    });
    $("#btnclean").on("click",function(){
       pid,login,atype,embed1,clink,slink,elink,mpblink,pplink,preq,steps,actr,specr,obs,orig = null;
       
        $("#pid").val('');
        $("#login").val('');
        $("#atype").val('');
        $("#embed1").val('');
        $("#clink").val('');
        $("#slink").val('');
		$("#elink").val('');
		$("#mpblink").val('');
		$("#pplink").val('');
        $("#preq").val('');
        $("#steps").val('');
        $("#actr").val('');
        $("#specr").val('');
        $("#obs").val('');
        $("#tareagen").val('');
        removeEmbedInput();
    });
    $("#addbtn").live("click",function(){
        var e = $(document.createElement('input'));
        embedn++;
        e.attr('id','embed'+embedn);
        e.attr('class','embedta');
        $("#embedca").append(e);
    });
    function getEmbedCodes(){
        var ecodes = [];
        for (i=1;i<=embedn;i++){
            //ecodes[i-1]=$("#embed"+i).val();
            ecodes+="\n" + $("#embed"+i).val();
        }
        return ecodes;
    }
    function removeEmbedInput(){
        for(i=2;i<=embedn;i++){
            $("#embed"+i).remove();
        }
        embedn=1;
    }
});
