
    $( function() {

        var windowHeight = $(window).height();

        function partOneAni(){

            var isSlider1 = false;
            isSlider2 = false;
            isOption1 = false;
            isOption2 = false;
            isAnsHide = true;
            function sliderBar(sliderID, num){
                var el = sliderID.find(".slider-range-min");
                var value = sliderID.find(".slider-value");
                var ansValue = sliderID.find(".answer-value")
//                console.log(ansValue);
                var isAnsShow = false;
                el.slider({
                    range: "min",
                    value: 50,
                    min: 1,
                    max: 100,
                    slide: function( event, ui ) {
                        value.html(ui.value+"%");
                        value.css({
                            "left": ui.value * 0.074 + "rem",
                            "color": "#ffc13a"
                        });
                    },
                    stop: function(event, ui){
                        if(num == 1 && !isSlider1) {
                            isSlider1 = true;
                        }
                        if(num == 2 && !isSlider2) {
                            isSlider2 = true;
                        }
                        checkIfDone();
                        if(!isAnsShow) {
                            ansValue.velocity({left: function(){
                                if(num==1){
                                    return "70%"
                                }else {
                                    return "35%"
                                }
                            },
                                opacity: 1}, { duration: 800});
                            isAnsShow = true;
                        }
                    }
                });
                value.html( el.slider( "value" )+"%" );
                value.css({
                    "left": el.slider( "value" )*0.074 + "rem"
                });

            }
            function checkBox(checkBoxID, num) {
                var parentEl = checkBoxID;
                var childrenEls = parentEl.find(".checkBox");
                var rightChildEl = parentEl.find(".rightAnswer");
                childrenEls.each(function(){
                    $(this).click(function(){

                        childrenEls.each(function(){
                            $(this).css({
                                "background-image": "url('images/check.png')",
                                "background-repeat": "no-repeat",
                                "background-size": "100% 100%"
                            })
                        })
                        rightChildEl.css({
                            "background-image": "url('images/checkRight.png')",
                            "background-repeat": "no-repeat",
                            "background-size": "100% 100%"
                        })
                        var text = $(this).html();
                        var rightText = rightChildEl.html();
                        if(text !== rightText) {
                            $(this).css({
                                "background-image": "url('images/checkWrong.png')",
                                "background-repeat": "no-repeat",
                                "background-size": "100% 100%"
                            })
                        }

                        if(num == 1 && !isOption1) {
                            isOption1 = true;
                        }
                        if(num == 2 && !isOption2) {
                            isOption2 = true;
                        }
                        checkIfDone();

                    })
                })
            }
            function checkIfDone(){
                if(isSlider1&&isSlider2&&isOption1&&isOption2&&isAnsHide){


                    $("body").height($("#testPaper2").offset().top+$("#testPaper2").height()+80);
                    $('#houseBarTitle')
                            .velocity("scroll", { delay: 500, duration: 1200, easing: "easeInOutQuart" })
                            .velocity({ opacity: 1 });
                    isAnsHide = false;
                }else {
                    return ;
                }
            }

            sliderBar($("#sliderBar1"),1);
            sliderBar($("#sliderBar2"),2);
            checkBox($("#answerOption1"),1);
            checkBox($("#answerOption2"),2);


            $("body").height($("#testPaper1").offset().top+$("#testPaper1").height()+50);
            $("#header").velocity("transition.slideDownBigIn");
            $("#ani1").velocity("transition.slideUpIn", {delay: 1000, duration: 1200});
            $("#ani2").velocity("transition.slideUpIn", {delay: 2200, duration: 600});
            $("#ani3").velocity("transition.slideUpIn", {delay: 2800, duration: 600});
            $("#ani4").velocity("transition.flipBounceYIn", {delay: 3100, duration: 600});
            $("#ani4 .colorBar").velocity({width: "76%"}, {delay: 3400, duration: 600});
            $("#ani5").velocity("transition.flipBounceYIn", {delay: 4200, duration: 600});

            $("#ani5 .colorBar").velocity({width: "40%"}, {delay: 4800, duration: 600});
            $("#ani6").velocity("transition.fadeIn", {delay: 5200, duration: 600});
            $("#testPaper1").velocity("transition.slideDownIn", {delay: 5800});
            $("#testPaper1 .ui-slider-handle").eq(0).velocity("callout.flash", {delay: 6400});

        }

        function partTwoAni(){
            $("#ani21").velocity("transition.slideUpIn", {delay: 200, duration: 600});
            $("#ani22").velocity("transition.flipBounceYIn", {delay: 800, duration: 600});
            $("#ani22 .colorBar").velocity({width: "69%"}, {delay: 1400, duration: 600});
            $("#ani23").velocity("transition.slideUpIn", {delay: 2000, duration: 600});
            $("#ani24").velocity("transition.slideUpIn", {delay: 2600, duration: 600});


        }
        function partThreeAni(){
            $("#ani31").velocity("transition.slideUpIn", {delay: 200, duration: 600});
            $("#ani32").velocity("transition.slideUpIn", {delay: 800, duration: 600});
            $("#ani33").velocity("transition.slideUpIn", {delay: 1400, duration: 600});
            $("#ani34").velocity("transition.slideUpIn", {delay: 2000, duration: 600});
        }
        function partFourAni(){
            $("#ani41").velocity("transition.slideUpIn", { duration: 600});
            $("#ani42").velocity("transition.flipBounceYIn", {delay: 600, duration: 600});
            $("#ani42 .colorBar").velocity({width: "56%"}, {delay: 1200, duration: 600});
            $("#ani43").velocity("transition.slideUpIn", {delay: 1800, duration: 600});
            $("#ani44").velocity("transition.slideUpIn", {delay: 2400, duration: 600});
            $("#ani45").velocity("transition.slideUpIn", {delay: 3000, duration: 600});
            $("#ani46").velocity("transition.slideUpIn", {delay: 4600, duration: 600});
            $("#ani47").velocity("transition.slideUpIn", {delay: 5200, duration: 600});
            $("#ani48").velocity("transition.flipBounceYIn", {delay: 5800, duration: 600});
            $("#ani48 .colorBar").velocity({width: "55%"}, {delay: 6400, duration: 600});
            $("#ani49").velocity("transition.slideUpIn", {delay: 7000, duration: 600});
            $("#ani444").velocity("transition.slideUpIn", {delay: 7600, duration: 600});
            $("#ani445").velocity("transition.slideUpIn", {delay: 8200, duration: 600});
        }


        function partFiveAni(){

            var isSlider = false;
            var isOption = false;
            var isAnsHide = true;
            function sliderBar(sliderID){
                var el = sliderID.find(".slider-range-min");
                var value = sliderID.find(".slider-value");
                var ansValue = sliderID.find(".answer-value")
                var isAnsShow = false;
                el.slider({
                    range: "min",
                    value: 50,
                    min: 1,
                    max: 100,
                    slide: function( event, ui ) {
                        value.html(ui.value+"%");
                        value.css({
                            "left": ui.value * 0.074 + "rem",
                            "color": "#ffc13a"
                        });
                    },
                    stop: function(event, ui){
                        if(!isSlider) {
                            isSlider = true;
                        }
                        checkIfDone();
                        if(!isAnsShow) {
                            ansValue.velocity({left: "40%", opacity: 1}, { duration: 800});
                            isAnsShow = true;
                        }
                    }
                });
                value.html( el.slider( "value" )+"%" );
                value.css({
                    "left": el.slider( "value" )*0.074 + "rem"
                });

            }
            function checkBox(checkBoxID) {
                var parentEl = checkBoxID;
                var childrenEls = parentEl.find(".checkBox");
                var rightChildEl = parentEl.find(".rightAnswer");
                childrenEls.each(function(){
                    $(this).click(function(){

                        childrenEls.each(function(){
                            $(this).css({
                                "background-image": "url('images/check.png')",
                                "background-repeat": "no-repeat",
                                "background-size": "100% 100%"
                            })
                        })
                        rightChildEl.css({
                            "background-image": "url('images/checkRight.png')",
                            "background-repeat": "no-repeat",
                            "background-size": "100% 100%"
                        })
                        var text = $(this).html();
                        var rightText = rightChildEl.html();
                        if(text !== rightText) {
                            $(this).css({
                                "background-image": "url('images/checkWrong.png')",
                                "background-repeat": "no-repeat",
                                "background-size": "100% 100%"
                            })
                        }

                        if(!isOption) {
                            isOption = true;
                        }
                        checkIfDone();

                    })
                })
            }
            function checkIfDone(){
                if(isSlider && isOption && isAnsHide){
//                    console.log("yes");
                    $("body").height($("#footer").offset().top+$("#footer").height());
                    $('#ani53')
                            .velocity("scroll", { delay: 500, duration: 1200, easing: "easeInOutQuart" })
                            .velocity({ opacity: 1 });
                    $("#ani54").velocity("transition.fadeIn", { delay: 3000, duration: 400});
                    $("#ani54").velocity("callout.tada", {delay: 200, duration: 600});
                    $("#ani55").velocity("transition.slideLeftIn", {delay: 4000, duration: 600});
                    isAnsHide = false;
                }else {
                    return ;
                }
            }

            sliderBar($("#sliderBar3"));
            checkBox($("#answerOption3"));


            $("#ani51").velocity("transition.fadeIn", { duration: 200});
            $("#ani51").velocity("callout.tada", {delay: 200, duration: 600});
            $("#ani52").velocity("transition.slideLeftIn", {delay: 800, duration: 600});
            $("#ani52 .colorBar").velocity({width: "36%"}, {delay: 1400, duration: 600});
            $("#testPaper2").velocity("transition.slideDownIn", {delay: 2000});


        }



        partOneAni();

        var isPartTwoAni = false;
        var isPartThreeAni = false;
        var isPartFourAni = false;
        var isPartFiveAni = false;
        var isTestPaperAni = false;
        $(window).scroll( function(){

            var partTwoTop = $("#partTwo").offset().top;
            var partThreeTop = $("#partThree").offset().top;
            var partFourTop = $("#partFour").offset().top;
            var partFiveTop = $("#partFive").offset().top;
            var windowTop = $(window).scrollTop();

            if( windowTop >= partTwoTop-windowHeight/2 && !isPartTwoAni){
                partTwoAni();
                isPartTwoAni = true;
            }
            if( windowTop >= partThreeTop-windowHeight/2 && !isPartThreeAni){
                partThreeAni();
                isPartThreeAni = true;
            }
            if( windowTop >= partFourTop-windowHeight/2 && !isPartFourAni){
                partFourAni();
                isPartFourAni = true;
            }
            if( windowTop >= partFiveTop-windowHeight/2 && !isPartFiveAni){
                partFiveAni();
                isPartFiveAni = true;
            }


            var testPaperTop = $("#testPaper1").offset().top;
            if( windowTop >= (testPaperTop-100) && !isTestPaperAni){
                $("#testPaper1 .ui-slider-handle").eq(0).velocity("callout.flash");
                isTestPaperAni = true;
            }



        });




    } );

