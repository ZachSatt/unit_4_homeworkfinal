// Questions object
let questionObj = ["Javascript is the same thing as Java.",
            "The h2 tag is the largest heading tag?",
            "HTML stands for Hypertext Markup Language.",
            "! indcates an end tag.",
            "The ul tag will create an ordered list.",
        ];
        // True or Button Variables
        let options001 = ["<button class=buttons001 onclick=question1i()>True</button><br /><br /><button class=buttons001 onclick=question1c()>False</button>"];
        let options002 = ["<button class=buttons001 onclick=question2c()>False</button><br /><br /><button class=buttons001 onclick=question2i()>True</button>"];
        let options003 = ["<button class=buttons001 onclick=question3c()>True</button><br /><br /><button class=buttons001 onclick=question3i()>False</button>"];
        let options004 = ["<button class=buttons001 onclick=question4i()>True</button><br /><br /><button class=buttons001 onclick=question4c()>False</button>"];
        let options005 = ["<button class=buttons001 onclick=question5c()>False</button><br /><br /><button class=buttons001 onclick=question5i()>True</button>"];

        let a = 0;
        a++;
        let b = 0;
        b++;
        // Incorrect vs Correct functions
        function begin1() {
            c = 10;
            disappear001.innerHTML = "";
            message001.innerHTML = questionObj[0];
            message002.innerHTML = options001;
            number001.innerHTML = a++;
        }

        function question1c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. Javascript and Java are not the same.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question1i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. Javascript and Java are not the same.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question2c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. The h2 tag is not the largest heading tag.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question2i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The h2 tag is not the largest heading tag.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question3c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. HTML stands for Hypertext Markup Language.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question3i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. HTML stands for Hypertext Markup Language.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question4c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. / indicates an end tag.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question4i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. / indicates an end tag.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question5c() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct. The ol tag creates an ordered list.";
            message002.innerHTML = "";
            score001.innerHTML = b++;
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        function question5i() {
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The ol tag creates an ordered list.";
            message002.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
        }

        // If/else if statements
        function next001() {
            if (a == "2") {
                update = setInterval("timer001()", 1000);
                c = 10;
                time001.innerHTML = 10;
                message001.innerHTML = questionObj[1];
                message002.innerHTML = options002;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "3") {
                update = setInterval("timer001()", 1000);
                c = 10;
                time001.innerHTML = 10;
                message001.innerHTML = questionObj[2];
                message002.innerHTML = options003;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "4") {
                update = setInterval("timer001()", 1000);
                c = 10;
                time001.innerHTML = 10;
                message001.innerHTML = questionObj[3];
                message002.innerHTML = options004;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }

            else if (a == "5") {
                update = setInterval("timer001()", 1000);
                c = 10;
                time001.innerHTML = 10;
                message001.innerHTML = questionObj[4];
                message002.innerHTML = options005;
                message003.innerHTML = "";
                number001.innerHTML = a++;
                message004.innerHTML = "";
            }
           
            else {
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Quiz";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
            }

        }
        // Timer
        function timer001() {
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }

            if (c < 1) {
                window.clearInterval(update);
                message001.innerHTML = "Time's up";
                message002.innerHTML = "";
                message003.innerHTML = "";
                message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
            }
        }

        update = setInterval("timer001()", 1000);

        function repeat001() {
            location.reload();
        }