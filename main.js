(function(){

  'use strict';

  $(document).ready(initialize);
  var counter = 1;
  var selected;
  var outcome = 0;
  var data = {
    1: {
      question: "What Nike sneaker was specifically created for use in Back to the Future Part II?",
      choices: {a: "Nike Air Pegasus", b: "Nike MAG", c: "Nike Waffle Racer", d: "Nike Foamposite"},
      answer: "Nike MAG",
      image: "images/air-mag.png",
      desc: "In 2011, Nike Inc. released the Nike MAG as a result of public demand. The highly-sought after shoe was initially featured in the movie Back to the Future Part II. Famed Nike Designer, Tinker Hatfield, was asked to create the futuristic shoe for the second installment of the movie series in 1989. Stand out features included light-up panels and self-fastening shoe laces. Over 15 years later, an online petition for an official release of the shoe made it's way on sneaker forums and caught the attention of Tinker. He and footwear innovator, Tiffany Beers, began working on the shoe and in 2011, 1,500 pairs were released on eBay with all proceeds going to the Michael J. Fox Foundation for Parkinson's Disease. A total of  US $9.4 million was raised in donations with shoe prices up to US $10,000 per pair."
    },
    2: {
      question: "What shoe did Michael Jordan wear against the Utah Jazz in the 1997 NBA Finals when he played with the flu?",
      choices: {a: "Air Jordan XII", b: "Air Jordan XI", c: "Air Jordan XIV", d: "Air Jordan IX"},
      answer: "Air Jordan XII",
      image: "images/jumpman-logo.png",
      desc: "Game 5 of the 1997 NBA finals with the Chicago Bulls and Utah Jazz will forever be known as the Michael Jordan Flu Game. While his stats for the game were pretty impressive with 38 points, 7 rebounds, 5 assists, and 3 steals, it was his ability to play through the game with the flu. Jordan was barely able to sit up before the game and fought to stand up after. He endured the hardwood for 44 minutes and scored a definitive game-clinching three-pointer that ultimately led to the Bulls 3-2 upper hand in the series with a Game 6 closeout. MJ wore the Air Jordan XII in the Black/Red colorway in Game 5 which were later nicknamed the \"Flu Games\" and will always be a reminder of his amazing performance that night. In recent years, the shoes have sold for US $104,765."
    },
    3: {
      question: "Which classic sneaker was made popular in the 1980's by Hip-Hop group Run-DMC?",
      choices: {a: "adidas Superstar shell toe", b: "Nike Cortez", c: "Converse All Star", d: "Nike Air Max 1"},
      answer: "adidas Superstar shell toe",
      image: "images/shell-toe.png",
      desc: "The iconic Superstar sneaker was first introduced in 1969. It's unique design offered all leather uppers and the infamous rubber \"shell toe\" as a protective toe piece. The shoe was initially marketed towards NBA players with Kareem Abdul-Jabaar being the most notable player. By the mid 1970's, over 75% of the NBA were rocking these sneakers on the hardwood. In the mid 1980's, hip-hop group Run-DMC out of Queens, New York made these shoes noticeable across the country. They wore their shell toes with the tongues pushed out and the laces undone. The shell toe sneaker is still an iconic silhouette to this day."
    },
    4: {
      question: "What was the nickname of the Air Yeezy II that Nike surprise released without any warning?",
      choices: {a: "Solar Red's", b: "Wolf Grey's", c: "Magma's", d: "Red October's"},
      answer: "Red October's",
      image: "images/red-october.png",
      desc: "On June 9, 2012, the Air Yeezy II was released in two premier color ways in Solar Red and Pure Platinum. The shoes were a limited release with only 5,000 pairs of each color way and had a price tag of US $245. The shoes were the most talked about sneakers in the game and were extremely sought after by sneakerheads. Prices skyrocketed up to US $4,000 per pair. Anticipation built for a third color way dubbed the \"Red October's\" and were surprised released on February 9, 2014 via a Nike Twitter link and sold out within seconds. Prices for the shoes were seen on eBay up to US $10,000."
    },
    5: {
      question: "What was the first Vans model ever created?",
      choices: {a: "Old Skool", b: "Slip-On", c: "Era", d: "Authentic"},
      answer: "Authentic",
      image: "images/authentic.png",
      desc: "The Vans dream was born in Anaheim, California on March 16, 1966. Paul Van Doren and three business partners opened up their first shop on 704 E. Broadway where customers had the unique experience of purchasing shoes that were made that day and ready for pick-up in the afternoon. The first shoe offered was the Vans #44 deck shoes, now known as the Authentic. Vans has created a huge and lasting presence in all cultures and sub-cultures from skateboarding, surf, bmx, music, and everyday casual wear. Other popular models were later introduced such as the Old Skool, Slip-On, and Era."
    }
  }

  function initialize(){
    preparePage();
    $("button.next").click(loadNextPage);
    $(".question").on("click.row", displayAnswer);
    $(".submit").click(submitAnswer);
  }

  function preparePage () {
    $(".total").hide();
    $(".board").hide();
    $(".display").hide();
    if (counter === 1) {
      $(".button.next").text("Start quiz");
    }
  }

  function loadNextPage () {
    if (counter === 0) {
      window.location.reload();
    }

    if (counter < 6 && counter > 0) {
      $(".display").show();
      $(".option").removeClass("active");
      $(".count.".concat(String(counter))).addClass("active");
      $(".intro").hide();
      $(".board").show();
      $(".main").show();
      $(".response").hide();
      $(".next").hide();
      selected = "Not Selected";
      return loadQuestion(counter);
    } else {
      counter = 0;
      $(".display").hide();
      $(".intro").hide();
      $(".main").hide();
      $(".response").hide();
    }

    if (counter === 0) {
      $(".total").show();
      $(".total-count").text(" ".concat(outcome));
      $(".button.next").text("Start Over");
    }
  }

  function loadQuestion (page) {
    var question = String(page).concat(". ", data[page].question);
    var opt1 = "A. ".concat(data[page].choices["a"]);
    var opt2 = "B. ".concat(data[page].choices["b"]);
    var opt3 = "C. ".concat(data[page].choices["c"]);
    var opt4 = "D. ".concat(data[page].choices["d"]);

    $("p.quest").text(question);
    $(".opt1").text(opt1);
    $(".opt2").text(opt2);
    $(".opt3").text(opt2);
    $(".opt4").text(opt4);
  }

  function displayAnswer (e) {
    selected = $(e.target).text().split(". ")[1];
    $(".option").removeClass("active");
    $(e.target).parent(".option").addClass("active");
  }

  function submitAnswer () {
    if (selected && selected !== "Not Selected") {
      $(".main").hide();
      $(".response").show();

      if (selected === data[counter].answer) {
        $(".pass-fail").text("CORRECT");
        $(".image").attr("src", "/".concat(data[counter].image));
        $(".res").text(data[counter].desc);
        $(".outcome".concat(String(counter))).addClass("pass");
        outcome++;
      } else {
        $(".pass-fail").text("INCORRECT");
        $(".image img").attr("src", data[counter].image);
        $(".res").text(data[counter].desc);
        $(".outcome".concat(String(counter))).addClass("fail");
      }

      $(".next").show();
      $(".button.next").text("Next quiz");
      counter++
    } else {
      return alert("Please selected one option.");
    }
  }
})();
