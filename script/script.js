// Show content on the same page= "none";

function show(obj){
    // Sub topicos > 
    /*document.getElementById('topic11').style.display = "none";
                document.getElementById('topic12').style.display = "none";
                document.getElementById('topic13').style.display = "none";
                document.getElementById('topic21').style.display = "none";
                document.getElementById('topic22').style.display = "none";
                document.getElementById('topic23').style.display = "none";
                document.getElementById('topic31').style.display = "none";
                document.getElementById('topic32').style.display = "none";
                document.getElementById('topic33').style.display = "none";
                document.getElementById('topic34').style.display = "none";
                document.getElementById('topic51').style.display = "none";
                document.getElementById('topic52').style.display = "none";
                document.getElementById('topic53').style.display = "none";
                document.getElementById('topic54').style.display = "none";
                document.getElementById('topic55').style.display = "none";
                */
                
    document.getElementById('topic1').style.display = "none";
    document.getElementById('topic2').style.display = "none";
    document.getElementById('topic3').style.display = "none";

    switch (obj.id) {
        case 'show_topic1':
            document.getElementById('topic1').style.display = "inline";
            break;

        case 'show_topic2':
            document.getElementById('topic2').style.display = "inline";
            break;

        case 'show_topic3':
            document.getElementById('topic3').style.display = "inline";
            break;
    }
}