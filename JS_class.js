/* function class1() {
    let Model, year, brand;
    this.drive = function(){
        console.log("Hi");
    }
}

let c1 = new class1();
console.log(c1.Model);
c1.Model = 'X9';
console.log(c1.Model);
c1.drive(); */

function Account() {
    this.balance = 100000;
    this.logstmt = [];
    this.deposit = function(addAmount) {
        this.balance += addAmount;
        this.logstmt.push( Date() + " " + "Deposit" + " " + addAmount);
    }

    this.withdraw = function() {
// ToDo
    }
    this.getBalance = function() {
        console.log(this.balance);
    }

    this.miniStmt = function() {
        return this.logstmt.forEach(function(num) {
            console.log(num);
        } );
            
        
    }
}

let acc = new Account();
acc.getBalance();
acc.deposit(10);
acc.getBalance();
acc.miniStmt();