// ここから書いてください
var vm = new Vue({
    el: '#app',
    data: {
        name: "unknown",
        role: "Hero",
        gender: "Male",
        traits: "Everyman",
        strength: 10,
        agility: 10,
        resilience: 10,
        wisdom: 10,
        luck: 10,
        options: [
            "Male",
            "Female"
        ],
        img:"https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png"
    },
    computed: {
        drawStatus: function(){
            switch(this.traits){
                case "Bat out of hell":
                    this.strength = 10;
                    this.agility = 14;
                    this.resilience = 10;
                    this.wisdom = 10;
                    this.luck = 10;
                    break;
                case "Brave":
                    this.strength = 11;
                    this.agility = 11;
                    this.resilience = 10;
                    this.wisdom = 10;
                    this.luck = 12;
                    break;
                case "Lucky devil":
                    this.strength = 10;
                    this.agility = 10;
                    this.resilience = 10;
                    this.wisdom = 10;
                    this.luck = 15;
                    break;
                default:
                    this.strength = 10;
                    this.agility = 10;
                    this.resilience = 10;
                    this.wisdom = 10;
                    this.luck = 10;
            }
        },
        changeImg: function(){
            if(this.gender === "Male" && this.role === "Hero"){
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png";
            }
            else if(this.gender === "Female" && this.role === "Hero"){
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png";
            }
            else if(this.gender === "Male" && this.role === "Warrior"){
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png";
            }
            else if(this.gender === "Female" && this.role === "Warrior"){
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png";
            }
            else if(this.gender === "Male" && this.role === "Mage"){
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png";
            }
            else{
                this.img = "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png";
            }
        }
    }
})