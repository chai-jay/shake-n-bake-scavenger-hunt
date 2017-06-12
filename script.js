$(function() {
    var vm = {
        i: ko.observable(0),
        no: ko.observable('#1'),
        descript: ko.observable('At least 2 team members standing near Dog picture and pointing at the dog'),
        bonus: ko.observable('Bonus 1 pt for a 3rd member, 2 points for a stranger holding the character'),
        img: ko.observable('http://i.imgur.com/1zjYIGk.jpg'),
        counted: ko.observableArray(0),
        done: ko.observable(true),
        hasBonus: ko.observable(true),

        /////////////////////////////////

        prev: function() {
            var self = this;
            var prevIndex = self.i();
            if (prevIndex > 0) {
                self.i(prevIndex - 1);
                self.loadPic();
            }
        },
        next: function() {
            var self = this;
            var prevIndex = self.i();
            if (prevIndex < self.pics.length - 1) {
                self.i(prevIndex + 1);
                self.loadPic();
            }
        },
        loadPic: function() {
            var self = this;
            var index = self.i();
            var pic = self.pics[index];

            self.no(pic.no).descript(pic.descript).bonus(pic.bonus).img(pic.img).done(pic.done).hasBonus(pic.hasBonus);
            if (self.counted.indexOf(index) <= -1) {
                self.counted.push(self.i())
            }
        },

        /////////////////////////////////
        pics: [
            {
                no: '#1',
                descript: 'At least 2 team members standing near Dog picture and pointing at the dog',
                bonus: 'Bonus 1 pt for a 3rd member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/1zjYIGk.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#2',
                descript: '8 members on these steps giving the \'OK\' sign',
                bonus: 'Bonus 1 pt for a 9th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/UND2t0R.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#3',
                descript: '2 Members on the bench reading a newspaper',
                bonus: 'Bonus 1 pt for a 3rd member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/VBxfTU2.jpg',
                done: false,
                hasBonus: false
            },
            {
                no: '#4',
                descript: '3 members on the stone wall hitchhiking',
                bonus: 'Bonus 1pt for a 4th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/5pxy9S6.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#5',
                descript: '4 members on the stoop in front of the abandoned building',
                bonus: 'Bonus 1 pt for a 5th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/b04GVEp.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#6',
                descript: '3 members lying on the brick wall near the yellow flowers',
                bonus: 'Bonus 1 pt for a 4th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/5mykBj7.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#7',
                descript: '3 members around the statue',
                bonus: 'Mimicking the statue poses',
                img: 'http://i.imgur.com/5Pz8dQQ.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#8',
                descript: '3 members behind the sign looking up into the sky',
                bonus: 'Bonus 1pt for a 4th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/wqH5UKI.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#9',
                descript: '2 members behind the graffiti mailbox',
                bonus: 'Bonus 1 pt for a 3rd member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/XXeNeTo.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#10',
                descript: '6 members sitting on the steps',
                bonus: 'Innovative seating pattern representing a famous movie',
                img: 'http://i.imgur.com/VazcM93.jpg',
                done: false,
                hasBonus: false
            },
            {
                no: '#11',
                descript: '6 members in front of this art work with both hands on their hips',
                bonus: 'Bonus 1 pt for a 7th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/qRxMH1x.jpg',
                done: false,
                hasBonus: false
            },
            {
                no: '#12',
                descript: '2 members behind or on the tractor',
                bonus: 'Bonus 1pt for a 3rd member, 2 points for a member sitting on the tractor',
                img: 'http://i.imgur.com/3biQl1M.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#13',
                descript: '4 members near the mural acting like they are in deep thought',
                bonus: 'Bonus 1 pt for a 5th member, 2 points for a stranger holding the character',
                img: 'http://i.imgur.com/hMk5WDW.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#14',
                descript: '2 members on the stairs standing on separate steps',
                bonus: 'Bonus 1 pt for a 3rd member, 4 points for a stranger holding the character',
                img: 'http://i.imgur.com/KRq5Pjd.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#15',
                descript: '4 members in front of the store in a Superman pose',
                bonus: 'A store employee holding the character',
                img: 'http://i.imgur.com/4oml1iZ.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#16',
                descript: '2 members on walkway in front of the crackhouse',
                bonus: 'Bonus 1 pt for a 3rd member, 2 points for someone touching the house during the picture',
                img: 'http://i.imgur.com/Jfd93bM.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#17',
                descript: '3 members near the CITGO sign doing the Macarena',
                bonus: 'Bonus 1 pt for a 4th member, 5 points if a car is actually getting gas (must appear in picture)',
                img: 'http://i.imgur.com/okRco9S.jpg',
                done: true,
                hasBonus: false
            },
            {
                no: '#18',
                descript: '5 members standing under the awning',
                bonus: 'The hot dog guy is holding the character ',
                img: 'http://i.imgur.com/a0Ys35R.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#19',
                descript: '3 members sitting on the bench with thumb in their mouth',
                bonus: 'A stranger holds the character',
                img: 'http://i.imgur.com/qYVQRgo.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#20',
                descript: '5 members sitting on the benches with legs crossed',
                bonus: 'A stranger holds the character',
                img: 'http://i.imgur.com/uM5fbe3.jpg',
                done: false,
                hasBonus: false
            },
            {
                no: '#21',
                descript: '5 members sitting on the steps doing the Mr. Spock \'Live long and Prosper\' sign',
                bonus: 'A stranger holds the character',
                img: 'http://i.imgur.com/u0H4liO.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#22',
                descript: '5 members standing on the small metal dock flashing peace signs',
                bonus: 'A stranger holds the character',
                img: 'http://i.imgur.com/r1qQ2xk.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#23',
                descript: '3 members sitting on the brick wall making the \'gas face\'',
                bonus: 'A stranger is holding the character',
                img: 'http://i.imgur.com/M3gvahO.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#24',
                descript: '5 members standing under the awning flashing gang signs',
                bonus: 'A stranger is holding the character',
                img: 'http://i.imgur.com/4kK7myp.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#25',
                descript: 'Picture with Stu from Monmouth Meats in his store holding the character',
                bonus: 'Another employee is in the picture',
                img: 'http://i.imgur.com/7hROk87.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#26',
                descript: 'Picture with any employee from Siam Garden in the restaurant holding the character',
                bonus: 'Another employee is in the picture',
                img: 'http://i.imgur.com/G2tF5mN.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#27',
                descript: 'Picture with any hostess/cashier/waiter from Surf Taco in their store holding the character',
                bonus: 'Another employee is in the picture',
                img: 'http://i.imgur.com/JlgMeNy.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#28',
                descript: 'Picture of a non-DL inhabitant of 116 Chestnut Street holding the character',
                bonus: 'They flash a gang sign',
                img: 'http://i.imgur.com/CEgj3fi.jpg',
                done: true,
                hasBonus: false
            },
            {
                no: '#29',
                descript: 'Picture of a Wawa sandwich maker holding the character',
                bonus: 'Another employee is in the picture',
                img: 'http://i.imgur.com/ZDsXmtr.jpg',
                done: true,
                hasBonus: true
            },
            {
                no: '#30',
                descript: 'Photo Bill Meyers and Joe Tallman with the character',
                bonus: 'They both flash a gang sign',
                img: 'http://i.imgur.com/IVM1eHa.jpg',
                done: true,
                hasBonus: true
            },
        ]
    }

    ko.applyBindings(vm);

    $(window).keyup(function(e){
            switch(e.keyCode){
                    case 37:
                        vm.prev();
                        break;
                    case 39:
                        vm.next();
                        break;
            }
    });
});
