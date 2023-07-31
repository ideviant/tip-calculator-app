var bill = 0;
var tip = 0;
var numberOfPeople = 0;
var tipAmount;
var tipAmountPerPerson;
var total;
var totalAmountPerPerson;

// Get bill
$(".dollar")
    .on("keyup", function () {
        bill = $(this).val();
        isReady();
    })
    .trigger("keyup");

// Select tip
$(".small-input").on("click", function () {
    $(".small-input").css({
        "background-color": "hsl(183, 100%, 15%)",
        color: "white",
    });
    $(".custom").css({
        "background-color": "hsl(189, 41%, 97%)",
        color: "hsl(184, 14%, 56%)",
    });
    $(this).css({
        "background-color": "hsl(185, 41%, 84%)",
        color: "hsl(183, 100%, 15%)",
    });
    tip = $(this).text();
    tip = parseFloat(tip.substr(0, tip.length - 1) * 0.01); // convert string to float
    isReady();
});

$(".tip-input")
    .on("keyup", function () {
        tip = parseFloat($(this).val() * 0.01);
        isReady();
    })
    .trigger("keyup");

// Get number of people
$(".person")
    .on("keyup", function () {
        numberOfPeople = $(this).val();
        isReady();
    })
    .trigger("keyup");

// Check required value
function isReady() {
    if (bill != 0 && tip != 0 && numberOfPeople != 0) {
        console.log(
            "bill: " + bill + " tip: " + tip + " people: " + numberOfPeople,
        );
        tipAmount = parseFloat(bill * tip);
        tipAmountPerPerson = tipAmount / numberOfPeople;
        $("#tipAmountPerPerson").text("$" + tipAmountPerPerson.toFixed(2));

        total = parseFloat(bill) + tipAmount;
        totalAmountPerPerson = total / numberOfPeople;
        $("#totalAmountPerPerson").text("$" + totalAmountPerPerson.toFixed(2));

        $(".reset").removeAttr("disabled");
        return true;
    } else {
        return false;
    }
}

// Reset value
$(".reset").on("click", function () {
    bill = 0;
    $(".dollar").val("0");

    tip = 0;
    $(".small-input").css({
        "background-color": "hsl(183, 100%, 15%)",
        color: "white",
    });
    $(".custom").css({
        "background-color": "hsl(189, 41%, 97%)",
        color: "hsl(184, 14%, 56%)",
    });
    $(".tip-input").val("Custom");

    numberOfPeople = 0;
    $(".person").val("0");

    tipAmountPerPerson = "0.00";
    $("#tipAmountPerPerson").text("$" + tipAmountPerPerson);

    totalAmountPerPerson = "0.00";
    $("#totalAmountPerPerson").text("$" + totalAmountPerPerson);

    $(".reset").attr("disabled", true);
});
