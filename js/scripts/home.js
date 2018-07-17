/* Arc Reactor */
ul {
  list-style:none;
  margin:0;
  padding:0
}

#arc_container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.semi_arc_3 {
    content: "";
    position: absolute;
    width: 94%;
    height: 94%;
    left: 3%;
    top: 3%;
    border: 5px solid #02feff;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    animation: rotate 4s linear infinite;
    text-align: center;
    line-height: 129px;
.arc_reactor {
  position: relative;
  top: 50%;
  margin-top: -125px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 15px cyan, inset 0px 0px 50px 15px cyan;
}

.case_container {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
}

.core2 {
  background: #cedce0;
  width: 110px;
  height: 110px;
  border-radius: (50%);
  border: 5px solid white;
  animation: flicker 0.2s infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
@keyframes flicker {
  0% { box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3); }
  40% { box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3); }
  50% { box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3); }
  60% {     box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3); }
  100% { box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3); }
}

.e7 {
  width: 95.25%;
  height: 95.25%;
  left: 2.5475%;
  right: 2.5475%;
  border: 6px solid transparent;
  background: transparent;
  border-radius: (50%);
  transform: rotateZ(0deg);
  transition: box-shadow 3s ease;
  text-align: center;
  line-height: 100px;
}

.marks li {
  display:block;
  width: 3px;
  height: 11px;
  background: rgba(2, 254, 255, 0.8);
  position: absolute;
  margin-left: 105px;
  margin-top: -110px;
  animation: colour_ease2 3s infinite ease-in-out;
}

@keyframes colour_ease2 {
  0% { background: rgba(2,254,255,1); }
  50% { background: rgba(2,254,255,0.3); }
  100% { background: rgba(2,254,255,1); }
}

.marks li:first-child {transform:rotate(6deg) translateY(125px)}
.marks li:nth-child(2) {transform:rotate(12deg) translateY(125px)}
.marks li:nth-child(3) {transform:rotate(18deg) translateY(125px)}
.marks li:nth-child(4) {transform:rotate(24deg) translateY(125px)}
.marks li:nth-child(5) {transform:rotate(30deg) translateY(125px)}
.marks li:nth-child(6) {transform:rotate(36deg) translateY(125px)}
.marks li:nth-child(7) {transform:rotate(42deg) translateY(125px)}
.marks li:nth-child(8) {transform:rotate(48deg) translateY(125px)}
.marks li:nth-child(9) {transform:rotate(54deg) translateY(125px)}
.marks li:nth-child(10) {transform:rotate(60deg) translateY(125px)}
.marks li:nth-child(11) {transform:rotate(66deg) translateY(125px)}
.marks li:nth-child(12) {transform:rotate(72deg) translateY(125px)}
.marks li:nth-child(13) {transform:rotate(78deg) translateY(125px)}
.marks li:nth-child(14) {transform:rotate(84deg) translateY(125px)}
.marks li:nth-child(15) {transform:rotate(90deg) translateY(125px)}
.marks li:nth-child(16) {transform:rotate(96deg) translateY(125px)}
.marks li:nth-child(17) {transform:rotate(102deg) translateY(125px)}
.marks li:nth-child(18) {transform:rotate(108deg) translateY(125px)}
.marks li:nth-child(19) {transform:rotate(114deg) translateY(125px)}
.marks li:nth-child(20) {transform:rotate(120deg) translateY(125px)}
.marks li:nth-child(21) {transform:rotate(126deg) translateY(125px)}
.marks li:nth-child(22) {transform:rotate(132deg) translateY(125px)}
.marks li:nth-child(23) {transform:rotate(138deg) translateY(125px)}
.marks li:nth-child(24) {transform:rotate(144deg) translateY(125px)}
.marks li:nth-child(25) {transform:rotate(150deg) translateY(125px)}
.marks li:nth-child(26) {transform:rotate(156deg) translateY(125px)}
.marks li:nth-child(27) {transform:rotate(162deg) translateY(125px)}
.marks li:nth-child(28) {transform:rotate(168deg) translateY(125px)}
.marks li:nth-child(29) {transform:rotate(174deg) translateY(125px)}
.marks li:nth-child(30) {transform:rotate(180deg) translateY(125px)}
.marks li:nth-child(31) {transform:rotate(186deg) translateY(125px)}
.marks li:nth-child(32) {transform:rotate(192deg) translateY(125px)}
.marks li:nth-child(33) {transform:rotate(198deg) translateY(125px)}
.marks li:nth-child(34) {transform:rotate(204deg) translateY(125px)}
.marks li:nth-child(35) {transform:rotate(210deg) translateY(125px)}
.marks li:nth-child(36) {transform:rotate(216deg) translateY(125px)}
.marks li:nth-child(37) {transform:rotate(222deg) translateY(125px)}
.marks li:nth-child(38) {transform:rotate(228deg) translateY(125px)}
.marks li:nth-child(39) {transform:rotate(234deg) translateY(125px)}
.marks li:nth-child(40) {transform:rotate(240deg) translateY(125px)}
.marks li:nth-child(41) {transform:rotate(246deg) translateY(125px)}
.marks li:nth-child(42) {transform:rotate(252deg) translateY(125px)}
.marks li:nth-child(43) {transform:rotate(258deg) translateY(125px)}
.marks li:nth-child(44) {transform:rotate(264deg) translateY(125px)}
.marks li:nth-child(45) {transform:rotate(270deg) translateY(125px)}
.marks li:nth-child(46) {transform:rotate(276deg) translateY(125px)}
.marks li:nth-child(47) {transform:rotate(282deg) translateY(125px)}
.marks li:nth-child(48) {transform:rotate(288deg) translateY(125px)}
.marks li:nth-child(49) {transform:rotate(294deg) translateY(125px)}
.marks li:nth-child(50) {transform:rotate(300deg) translateY(125px)}
.marks li:nth-child(51) {transform:rotate(306deg) translateY(125px)}
.marks li:nth-child(52) {transform:rotate(312deg) translateY(125px)}
.marks li:nth-child(53) {transform:rotate(318deg) translateY(125px)}
.marks li:nth-child(54) {transform:rotate(324deg) translateY(125px)}
.marks li:nth-child(55) {transform:rotate(330deg) translateY(125px)}
.marks li:nth-child(56) {transform:rotate(336deg) translateY(125px)}
.marks li:nth-child(57) {transform:rotate(342deg) translateY(125px)}
.marks li:nth-child(58) {transform:rotate(348deg) translateY(125px)}
.marks li:nth-child(59) {transform:rotate(354deg) translateY(125px)}
.marks li:nth-child(60) {transform:rotate(360deg) translateY(125px)}