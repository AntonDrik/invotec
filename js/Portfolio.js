"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var data = [{
    link: 'SeeQuestor',
    href: 'https://www.seequestor.com/',
    fund: 'ANGLO S',
    img: './images/companies/c-1.png',
    text: 'SeeQuestor is an innovative tool that aims to speed up the process of video and audio analysis for legal forces and security ' + 'services for faster investigations and footage analysis. The software analyses movements and faces as well as transforms CCTV video and ' + 'audio into the standardised format, which in turn allows to speed up searching through the recorded materials. The company works closely ' + 'with legal forces around the globe.'
}, {
    link: 'Phaser',
    href: 'http://www.phasorsolutions.com/',
    fund: 'ANGLO S',
    img: './images/companies/c-2.png',
    text: 'Phasor is a developer of high throughput modular antennas that can be used in different industries including commercial aviation, maritime, ' + 'passenger or freight railways and military. The head office is located in the US, while technological development is in the UK. Phasor aims ' + 'to provide high-bandwidth without limits. They want to make it faster, cheaper, more reliable and widely accessible regardless of the location ' + 'or the type of transportation - in-flight or travelling over sea or land.'
}, {
    link: 'Radio Physic Solutions',
    href: 'https://www.rpssys.com/',
    fund: 'ANGLO S',
    img: './images/companies/c-3.png',
    text: 'Rethinking of security perimeter concept allowed Radion Physics Solutions to combine a radar technology with AI to identify ' + 'concealed weapons in the crowd. The company was established in 2008 in the UK, now has open negotiations on 4 continents.'
}, {
    link: 'SFH Oxford',
    href: 'https://sfhoxford.com/',
    fund: 'ANGLO S',
    img: './images/companies/c-4.png',
    text: 'SFH Oxford offers a solution for venous leg ulcers (VLUs) treatment. They offer 2 products - a set of sensors GraduCheck and GraduSox, ' + 'which is hosiery with polymer pads. The products aim to speed up the healing process, monitor it and prevent reoccurring.'
}, {
    link: 'Apta Biosciences',
    href: 'https://www.aptabiosciences.com/',
    fund: 'ANGLO S',
    img: './images/companies/c-5.png',
    text: 'Apta Biosciences has developed a proprietary, groundbreaking method for creating synthetic alternatives to antibodies. ' + 'The company is a spin-out from Fujitsu, where the technology was originally developed.'
}, {
    link: 'Litteldata',
    href: 'https://www.littledata.io/',
    fund: 'OION',
    img: './images/companies/c-6.png',
    text: 'The company offers a solution which simplifies data analysis obtained from big and powerfull analytics companies (such as Google or Facebook). ' + 'Littledata developed a userfriendly interface that makes it easier and faster to understand the insights of your e-commerce business.'
}, {
    link: 'Inova',
    href: 'https://www.bodytrak.co/',
    fund: 'OION',
    img: './images/companies/c-7.png',
    text: 'To reduce the number of workplace injuries due to high heat, loud noises and falls, Inova Design Solutions has developed a device - Bodytrak. ' + 'Bodytrak is the first platform-based solution that precisely monitors physiological data and provides the automated real-time data, audio ' + 'and predictive solution. All the data is stored in the cloud, and the sensor itself easily fits in your ear. Machine learning is aimed to ' + 'predict and, therefore, prevent falls, inactivity of workers. The potential use can be found in on-site industry, first response sector, ' + 'defence, healthcare and sport.'
}, {
    link: 'Whitelance',
    href: 'https://whitelance.co/',
    fund: 'OION',
    img: './images/companies/c-8.png',
    text: 'Instead of using standardised marketplaces for freelance search, Whitelance enables to launch your own freelance marketplace without ' + 'spending time and money building the technology. Fully supported, the demand-driven platform is affordable for everybody depending on ' + 'their company size.'
}, {
    link: 'Hello Tomo',
    href: 'https://www.hellotomo.co.uk/',
    fund: 'OION',
    img: './images/companies/c-9.png',
    text: 'Hello Tomo is an app to help you achieve your daily tasks, build healthy habits, improve motivation and promote self-care. ' + 'Tomo is a helpful bot expertly designed to support you with many of life’s obstacles including social anxiety, low mood, poor sleep and ' + 'maintaining healthy habits. The app is based on Behavioral Activation, which is a user-driven process used by psychiatrists and therapists ' + 'to help patients with their mental health. Tomo brings the healthiest of social media - there are no comments or likes, and photos and ' + 'selfies can be done anonymously.'
}, {
    link: 'GamerDating',
    href: 'https://www.gamerdating.com/',
    fund: 'OION',
    img: './images/companies/c-10.png',
    text: 'The world\'s dating service for gamers gives users the ability to find other single gamers. The service is collaborating with key ' + 'industry partners and networks to let gamers meet real gamers. Following the simple steps you can create an authentic profile, ' + 'start looking for gamers with same or similar game interests, make connections and take them to the next level.'
}, {
    link: 'Fourth State Medicine',
    href: 'https://www.fourthstatemedicine.co.uk/',
    fund: 'OION',
    img: './images/companies/c-12.png',
    text: 'Fourth State connects traditional medical approach and cutting edge space technologies. The core of the technology is a plasma ' + 'system that can be used in cosmetology - smoothing of wrinkles and acne marks. The plasma approach is noninvasive which means the ' + 'elimination of post-treatment sequela and infections. The company\'s aim is to continue the research on using plasma approach to wound care.'
}, {
    link: 'JellyBooks',
    href: 'https://www.jellybooks.com/',
    fund: 'OION',
    img: './images/companies/c-11.png',
    text: 'JellyBooks helps authors and book publishers to analyse their audience. After an e-book is downloaded by the reader, the embedded ' + 'tracking software measures how readers engage with the books. When and where was the book read, has it been finished - these are some ' + 'of the data obtained by the software. Data collection can be done both before and after the book is published. The date can be then ' + 'used for marketing and engagement with the audience.'
}, {
    link: 'Metafused',
    href: 'https://metafused.com/',
    fund: 'OION',
    img: './images/companies/c-13.png',
    text: 'Metafused is an award-winning company that offers capital markets to apply AI-based time series to their data, which in turn will ' + 'improve efficiency due to automation and prediction. The platform allows to increase the scope of the enquiry, decrease costs of ' + 'computation processing while working on a high-scale real-time data science pipeline. Metafused is currently working with an ' + 'investment bank, traders, brokers, cash management operations, custodians, and treasury in front, mid and back offices. ' + 'The software works with anonymous data, but even if it is not the case, Metafuse is ready to evaluate alternative ways.'
}, {
    link: 'Fundment',
    href: 'https://www.fundment.com/info/home/',
    fund: 'OION',
    img: './images/companies/c-14.png',
    text: 'Fundment is a meeting point between the discretionary fundmanagement and digital investement technology. The company automates the ' + 'eoperational side of delivering investment products for advisors and wealth managers, so they can focus on clients and business ' + 'growth. The fundamental principle is providing high quality operations for lower costs.'
}, {
    link: 'Blokur',
    href: 'https://blokur.com/',
    fund: 'OION',
    img: './images/companies/c-15.png',
    text: 'Blokur offers a blockchain-based solution for music creators and management companies to track their assets more precisely and ' + 'to ensure they are paid what they should, when they should, by ensuring that their rights are accurately represented.'
}, {
    link: 'Delic',
    href: 'https://www.delic.network/',
    fund: 'OION',
    img: './images/companies/c-16.png',
    text: 'The software is aming to ease and speed up the music creation process. It is targeting individual music creators, labels and management ' + 'companies. As a powerful assest management tool the software will help in uploading large files, navigate within the calalogue and ' + 'simplify rights management process.'
}, {
    link: 'Green Sea Guard',
    href: 'https://greenseaguard.com/',
    fund: 'OION',
    img: './images/companies/c-17.png',
    text: 'Green Sea Guard provides and installs the solutions to coastguards, port authorities and ship-owners to monitor and control emissions and ' + 'helping ship-owners to comply with the MARPOL regulations. The system tracks ship exhaust emissions, transmitting data collected from ' + 'the ship’s exhaust, and sending it to a secure server. The analysis system allows to gain an excellent picture of the engine performance.'
}, {
    link: 'Trackener',
    href: 'https://www.trackener.com/en/',
    fund: 'OION',
    img: './images/companies/c-18.png',
    text: 'Trackener introduces the 24/7 health monitor for horses. The ultimate goal is to identify health problems (e.g. colic signs, non-activity in ' + 'the field) at early stage and prevent them. The desing of the equipment allows to wear it for a long time which will ensure precise health ' + 'monitoring. The tracker collects data and analyses it using machine learning.'
}, {
    link: 'Voltrics',
    href: 'http://www.voltrics.co.uk/',
    fund: 'OION',
    img: './images/companies/c-19.png',
    text: 'Voltrics is developing a range of innovative and dynamic connections. The first product is Slip-Sphere, which is is a dynamic ' + 'electro-mechanical wiring harness joint that eliminates the need for cable flex in wiring harness assemblies. The construction ' + 'removes stress and works hardening of a cable and its associated components improving the lifespan and effectiveness of each part, ' + 'making the system as a whole more reliable all the while ensuring repairs can be made locally to the damaged area and not affect the ' + 'entire assembly. The simple and considered design allows it to be scaled to suit its intended use-case and similarly can carry a varying ' + 'number of channels as the product architecture requires. Slip-Sphere can be commissioned into a wide range of applications offering a dynamic ' + 'solution for challenging wiring applications. '
}];
var portfolioBox = $('.portfolio-cards');
var switcher = $('.controls__switcher');

var Portfolio =
    /*#__PURE__*/
    function () {
        function Portfolio() {
            _classCallCheck(this, Portfolio);

            this.cardsCounter = 4;
            this.cardsCountToShowMore = 4;
        }

        _createClass(Portfolio, [{
            key: "createCard",
            value: function createCard(data) {
                var card = document.querySelector('#card').content.cloneNode(true);
                card.querySelector('a').innerText = data.link;
                card.querySelector('a').href = data.href;
                card.querySelector('span').innerText = "(".concat(data.fund, " Fund)");
                card.querySelector('p').innerHTML = data.text;
                card.querySelector('img').src = data.img; // data.advantagesList.forEach( item => {
                //     const li = document.createElement('li');
                //     li.innerHTML = item;
                //     card.querySelector('ul').appendChild(li);
                // });

                portfolioBox.append(card);
            }
        }, {
            key: "showMore",
            value: function showMore() {
                var count = this.cardsCounter + this.cardsCountToShowMore;

                for (var i = this.cardsCounter; i < count; i++) {
                    if (typeof data[i] !== 'undefined') {
                        this.createCard(data[i]);
                        this.cardsCounter += 1;
                    }

                    if (typeof data[i + 1] === 'undefined') {
                        $('.portfolio-link').css('display', 'none');
                    }
                }
            }
        }, {
            key: "switch",
            value: function _switch() {
                portfolioBox.empty();
                var translate = switcher.css('transform').match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\d+)/)[1];
                translate = parseInt(translate);
                switcher.css('transform', "translateX(".concat(translate === 0 ? 95.5 : 0, "%)"));

                for (var i = 0; i < 4; i++) {
                    this.createCard(data[i]);
                }

                if (translate === 0) {
                    $('.portfolio__controls span:nth-child(1)').css('color', '#444444');
                    $('.portfolio__controls span:nth-child(2)').css('color', '#fff');
                    $('.portfolio-link').css('display', 'flex');
                    if (this.cardsCounter !== 4) this.cardsCounter = 4;
                } else {
                    $('.portfolio__controls span:nth-child(1)').css('color', '#fff');
                    $('.portfolio__controls span:nth-child(2)').css('color', '#444444');
                    $('.portfolio-link').css('display', 'none');
                }
            }
        }]);

        return Portfolio;
    }();

$(document).ready(function () {
    var portfolio = new Portfolio();
    $(".portfolio__controls").click(function () {
        portfolio.switch();
    });
    $('.portfolio-link').click(function (e) {
        e.preventDefault();
        portfolio.showMore();
    });
});
