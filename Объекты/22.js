let ask = (question,yea,no)=> question?yea:no;
alert(ask (confirm("Вы согласны?"),"Вы согласились.","Вы отменили выполнение."));