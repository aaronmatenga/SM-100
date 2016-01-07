(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;

    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
    var data = {};

    data.items = [
      {
        "name" : "John 14:15",
        "verses" : [
          "15. If ye love me, keep my commandments."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 6:36",
        "verses" : [
          "36. Look unto me in every thought; doubt not, fear not."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Philippians 4:13",
        "verses" : [
          "13. I can do all things through Christ which strengtheneth me."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Psalms 119:105",
        "verses" : [
          "105 Thy word is a lamp unto my feet, and a light unto my path."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 2:25",
        "verses" : [
          "25. Adam fell that men might be; and men are, that they might have joy."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 46:33",
        "verses" : [
          "33. And ye must practise virtue and holiness before me continually. Even so. Amen."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Psalms 127:3",
        "verses" : [
          "3. Lo children are an heritage of the Lord: and the fruit of the womb is his reward."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 25:13",
        "verses" : [
          "13. Wherefore, lift up thy heart and rejoice, and cleave unto the covenants which thou hast made."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Amos 3:7",
        "verses" : [
          "7. Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 82:10",
        "verses" : [
          "10. I, the Lord, am bound when ye do what I say; but when ye do not what I say, ye have no promise."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "3 Nephi 12:48",
        "verses" : [
          "48. Therefore I would that ye should be perfect even as I, or your Father who is in heaven is perfect."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Moses 1:39",
        "verses" : [
          "39. For behold, this is my work and my glory - to bring to pass the immortality and eternal life of man."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "John 14:6",
        "verses" : [
          "6. Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 19:23",
        "verses" : [
          "23. Learn of me, and listen to my words; walk in the meekness of my Spirit, and you shall have peace in me."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "John 17:3",
        "verses" : [
          "3. And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Alma 37:35",
        "verses" : [
          "35. O, remember, my son, and learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Genesis 2:24",
        "verses" : [
          "24. Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "John 3:5",
        "verses" : [
          "5. Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 58:27",
        "verses" : [
          "27. Verily I say, men should be anxiously engaged in a good cause, and do many things of their own free will, and bring to pass much righteousness;"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Moses 7:18",
        "verses" : [
          "18. And the Lord called his people Zion, because they were of one heart and one mind, and dwelt in righteousness; and there was no poor among them."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Proverbs 3:5-6",
        "verses" : [
          "5. Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
          "6. In all thy ways acknowledge him, and he shall direct thy paths."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Galatians 5:22–23",
        "verses" : [
          "22. But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,",
          "23. Meekness, temperance: against such there is no law."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 5:20",
        "verses" : [
          "20. Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 78:19",
        "verses" : [
          "19. And he who receiveth all things with thankfulness shall be made glorious; and the things of this earth shall be added unto him, even an hundred fold, yea, more."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 10:5",
        "verses" : [
          "5. Pray always, that you may come off conqueror; yea, that you may conquer Satan, and that you may escape the hands of the servants of Satan that do uphold his work."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "1 Peter 4:6",
        "verses" : [
          "6. For for this cause was the gospel preached also to them that are dead, that they might be judged according to men in the flesh, but live according to God in the spirit."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Alma 32:21",
        "verses" : [
          "21. And now as I said concerning faith--faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Alma 41:10",
        "verses" : [
          "10. Do not suppose, because it has been spoken concerning restoration, that ye shall be restored from sin to happiness. Behold, I say unto you, wickedness never was happiness."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Hebrews 12:9",
        "verses" : [
          "9. Furthermore we have had fathers of our flesh which corrected us, and we gave them reverence: shall we not much rather be in subjection unto the Father of spirits, and live?"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 1:18",
        "verses" : [
          "18. Come now, and let us reason together, saith the Lord: though your sins be as scarlet they shall be as white as snow; though they be red like crimson, they shall be as wool."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Mosiah 2:17",
        "verses" : [
          "17. And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 107:8",
        "verses" : [
          "8. The Melchizedek Priesthood holds the right of presidency, and has power and authority over all the offices in the church in all ages of the world, to administer in spiritual things."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Genesis 39:9",
        "verses" : [
          "9. There is none greater in this house than I; neither hath he kept back any thing from me but thee, because thou art his wife: how then can I do this great wickedness, and sin against God?"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Psalms 24:3-4",
        "verses" : [
          "3. Who shall ascend into the hill of the Lord? or who shall stand in his holy place?",
          "4. He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "James 2:17–18",
        "verses" : [
          "17. Even so faith, if it hath not works, is dead, being alone.",
          "18. Yea, a man may say, Thou hast faith, and I have works: shew me thy faith without thy works, and I will shew thee my faith by my works."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 58:42–43",
        "verses" : [
          "42. Behold, he who has repented of his sins, the same is forgiven, and I, the Lord, remember them no more.",
          "43. By this ye may know if a man repenteth of his sins--behold, he will confess them and forsake them."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Jeremiah 1:4-5",
        "verses" : [
          "4. Then the word of the Lord came unto me, saying,",
          "5. Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 18:10–11",
        "verses" : [
          "10. Remember the worth of souls is great in the sight of God;",
          "11. For, behold, the Lord your Redeemer suffered death in the flesh; wherefore he suffered the pain of all men, that all men might repent and come unto him."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 32:3",
        "verses" : [
          "3. Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "1 Corinthians 15:20-22",
        "verses" : [
          "20. But now is Christ risen from the dead, and become the firstfruits of them that slept.",
          "21. For since by man came death, by man came also the resurrection of the dead.",
          "22. For as in Adam all die, even so in Christ shall all be made alive."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 88:124",
        "verses" : [
          "124. 4 Cease to be idle; cease to be unclean; cease to find fault one with another; cease to sleep longer than is needful; retire to thy bed early, that ye may not be weary; arise early, that your bodies and your minds may be invigorated."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Samuel 16:7",
        "verses" : [
          "7. But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "1 Corinthians 6:19-20",
        "verses" : [
          "19. What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own?",
          "20. For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God's."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Revelation 20:12",
        "verses" : [
          "12. And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Matthew 11:28-30",
        "verses" : [
          "28. Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
          "29. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.",
          "30. For my yoke is easy, and my burden is light."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Moroni 7:41",
        "verses" : [
          "41. And what is it that ye shall hope for? Behold I say unto you that ye shall have hope through the atonement of Christ and the power of his resurrection, to be raised unto life eternal, and this because of your faith in him according to the promise."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "James 1:5–6",
        "verses" : [
          "5. If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.",
          "6. But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Ether 12:6",
        "verses" : [
          "6. And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Malachi 4:5-6",
        "verses" : [
          "5. Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord:",
          "6. And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Matthew 28:19-20",
        "verses" : [
          "19. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:",
          "20. Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Joshua 24:15",
        "verses" : [
          "15. And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the Lord."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 76:40–41",
        "verses" : [
          "40. And this is the gospel, the glad tidings, which the voice out of the heavens bore record unto us--",
          "41. That he came into the world, even Jesus, to be crucified for the world, and to bear the sins of the world, and to sanctify the world, and to cleanse it from all unrighteousness;"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "1 Nephi 3:7",
        "verses" : [
          "7. And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Alma 39:9",
        "verses" : [
          "9. Now my son, I would that ye should repent and forsake your sins, and go no more after the lusts of your eyes, but cross yourself in all these things; for except ye do this ye can in nowise inherit the kingdom of God. Oh, remember, and take it upon you, and cross yourself in these things."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Matthew 22:36-39",
        "verses" : [
          "36. Master, which is the great commandment in the law?",
          "37. Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.",
          "38. This is the first and great commandment.",
          "39. And the second is like unto it, Thou shalt love thy neighbour as thyself."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 8:2–3",
        "verses" : [
          "2. Yea, behold, I will tell you in your mind and in your heart, by the Holy Ghost, which shall come upon you and which shall dwell in your heart.",
          "3. Now, behold, this is the spirit of revelation; behold, this is the spirit by which Moses brought the children of Israel through the Red Sea on dry ground."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Exodus 19:5-6",
        "verses" : [
          "5. Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine:",
          "6. And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Ether 12:27",
        "verses" : [
          "27. And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 130:22–23",
        "verses" : [
          "22. The Father has a body of flesh and bones as tangible as man's; the Son also; but the Holy Ghost has not a body of flesh and bones, but is a personage of Spirit. Were it not so, the Holy Ghost could not dwell in us.",
          "23. A man may receive the Holy Ghost, and it may descend upon him and not tarry with him."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Mosiah 4:30",
        "verses" : [
          "30. But this much I can tell you, that if ye do not watch yourselves, and your thoughts, and your words, and your deeds, and observe the commandments of God, and continue in the faith of what ye have heard concerning the coming of our Lord, even unto the end of your lives, ye must perish. And now, O man, remember, and perish not."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Matthew 5:14-16",
        "verses" : [
          "14. Ye are the light of the world. A city that is set on an hill cannot be hid.",
          "15. Neighter do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.",
          "16. Let you light so shine before men, that they may see your good works, and glorify your Father which is in heaven."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 131:1–4",
        "verses" : [
          "1. IN the celestial glory there are three heavens or degrees;",
          "2. And in order to obtain the highest, a man must enter into this order of the priesthood [meaning the new and everlasting covenant of marriage];",
          "3. And if he does not, he cannot obtain it.",
          "4. He may enter into the other, but that is the end of his kingdom; he cannot have an increase."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 2:27",
        "verses" : [
          "27. Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man. And they are free to choose liberty and eternal life, through the great Mediator of all men, or to choose captivity and death, according to the captivity and power of the devil; for he seeketh that all men might be miserable like unto himself."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Genesis 1:26-27",
        "verses" : [
          "26. And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
          "So God created man in his own image, in the image of God created he him; male and female created he them."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 13:1",
        "verses" : [
          "1. UPON you my fellow servants, in the name of Messiah I confer the Priesthood of Aaron, which holds the keys of the ministering of angels, and of the gospel of repentance, and of baptism by immersion for the remission of sins; and this shall never be taken again from the earth, until the sons of Levi do offer again an offering unto the Lord in righteousness."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Timothy 3:15–17",
        "verses" : [
          "15. And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.",
          "16. All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:",
          "17. That the man of God may be perfect, throughly furnished unto all good works."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 58:6-7",
        "verses" : [
          "6. Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke?",
          "7. Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house? when thou seest the naked, that thou cover him; and that thou hide not thyself from thine own flesh?"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Acts 3:19-21",
        "verses" : [
          "19. Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord;",
          "20. And he shall send Jesus Christ, which before was preached unto you:",
          "21. Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 18:15–16",
        "verses" : [
          "15. And if it so be that you should labor all your days in crying repentance unto this people, and bring, save it be one soul unto me, how great shall be your joy with him in the kingdom of my Father!",
          "16. And now, if your joy will be great with one soul that you have brought unto me into the kingdom of my Father, how great will be your joy if you should bring many souls unto me!"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "3 Nephi 18:15, 20–21",
        "verses" : [
          "15. Verily, verily, I say unto you, ye must watch and pray always, lest ye be tempted by the devil, and ye be led away captive by him.",
          "20. And whatsoever ye shall ask the Father in my name, which is right, believing that ye shall receive, behold it shall be given unto you.",
          "21. Pray in your families unto the Father, always in my name, that your wives and your children may be blessed."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 1:37–38",
        "verses" : [
          "37. Search these commandments, for they are true and faithful, and the prophecies and promises which are in them shall all be fulfilled.",
          "38. What I the Lord have spoken, I have spoken, and I excuse not myself; and though the heavens and the earth pass away, my word shall not pass away, but shall all be fulfilled, whether by mine own voice or by the voice of my servants, it is the same."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Moroni 10:4–5",
        "verses" : [
          "4. And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost.",
          "5. And by the power of the Holy Ghost ye may know the truth of all things."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "1 Corinthians 15:40-42",
        "verses" : [
          "40. There are also celestial bodies, and bodies terrestrial: but the glory of the celestial is one, and the glory of the terrestrial is another.",
          "41. There is one glory of the sun, and another glory of the moon, and another glory of the stars: for one star differeth from another star in glory.",
          "42. So also is the resurrection of the dead. It is sown in corruption; it is raised in incorruption:"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Ezekiel 37:15-17",
        "verses" : [
          "15. The word of the Lord came again unto me, saying,",
          "16. Moreover, thou son of man, take thee one stick, and write upon it, For Judah, and for the children of Israel his companions: then take another stick, and write upon it, For Joseph, the stick of Ephraim, and for all the house of Israel his companions:",
          "17. And join them one to another into one stick; and they shall become one in thine hand."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 64:9–11",
        "verses" : [
          "9. Wherefore, I say unto you, that ye ought to forgive one another; for he that forgiveth not his brother his trespasses standeth condemned before the Lord; for there remaineth in him the greater sin.",
          "10. I, the Lord, will forgive whom I will forgive, but of you it is required to forgive all men.",
          "11. And ye ought to say in your hearts--let God judge between me and thee, and reward thee according to thy deeds."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Luke 24:36-39",
        "verses" : [
          "36. And as they thus spake, Jesus himself stood in the midst of them, and saith unto them, Peace be unto you.",
          "37. But they were terrified and affrighted, and supposed that they had seen a spirit.",
          "38. And he said unto them, Why are ye troubled? and why do thoughts arise in your hearts?",
          "39. Behold my hands and my feet, that it is I myself: handle me, and see; for a spirit hath not flesh and bones, as ye see me have."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 9:28–29",
        "verses" : [
          "28. O that cunning plan of the evil one! O the vainness, and the frailties, and the foolishness of men! When they are learned they think they are wise, and they hearken not unto the counsel of God, for they set it aside, supposing they know of themselves, wherefore, their wisdom is foolishness and it profiteth them not. And they shall perish.",
          "29. But to be learned is good if they hearken unto the counsels of God."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 76:22–24",
        "verses" : [
          "22. And now, after the many testimonies which have been given of him, this is the testimony, last of all, which we give of him: That he lives!",
          "23. For we saw him, even on the right hand of God; and we heard the voice bearing record that he is the Only Begotten of the Father--",
          "24. That by him, and through him, and of him, the worlds are and were created, and the inhabitants thereof are begotten sons and daughters unto God."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Thessalonians 2:1–3",
        "verses" : [
          "1. NOW we beseech you, brethren, by the coming of our Lord Jesus Christ, and by our gathering together unto him,",
          "2. That ye be not soon shaken in mind, or be troubled, neither by spirit, nor by word, nor by letter as from us, as that the day of Christ is at hand.",
          "3. Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition;"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 25:23, 26",
        "verses" : [
          "23. For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do.",
          "26. And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 29:13-14",
        "verses" : [
          "13. Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me, and their fear toward me is taught by the precept of men:",
          "14. Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 53:3-5",
        "verses" : [
          "3. He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not.",
          "4. Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted.",
          "5. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Malachi 3:8-10",
        "verses" : [
          "8. Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings.",
          "9. Ye are cursed with a curse: for ye have robbed me, even this whole nation.",
          "10. Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Mosiah 3:19",
        "verses" : [
          "19. For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord, and becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 89:18–21",
        "verses" : [
          "18. And all saints who remember to keep and do these sayings, walking in obedience to the commandments, shall receive health in their navel and marrow to their bones;",
          "19. And shall find wisdom and great treasures of knowledge, even hidden treasures;",
          "20. And shall run and not be weary, and shall walk and not faint.",
          "21. And I, the Lord, give unto them a promise, that the destroying angel shall pass by them, as the children of Israel, and not slay them. Amen."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Abraham 3:22-23",
        "verses" : [
          "22. Now the Lord had shown unto me, Abraham, the intelligences that were organized before the world was; and among all these there were many of the noble and great ones;",
          "23. And God saw these souls that they were good, and he stood in the midst of them, and he said: These I will make my rulers; for he stood among those that were spirits, and he saw that they were good; and he said unto me: Abraham, thou art one of them; thou wast chosen before thou wast born."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Acts 2:36-38",
        "verses" : [
          "36. Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ.",
          "37. Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do?",
          "38. Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Isaiah 58:13-14",
        "verses" : [
          "13. If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the Lord, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words:",
          "14. Then shalt thou delight thyself in the Lord; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the Lord hath spoken it."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 121:36, 41–42",
        "verses" : [
          "36. That the rights of the priesthood are inseparably connected with the powers of heaven, and that the powers of heaven cannot be controlled nor handled only upon the principles of righteousness.",
          "41. No power or influence can or ought to be maintained by virtue of the priesthood, only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned;",
          "42. By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy, and without guile--"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "D&C 19:16–19",
        "verses" : [
          "16. For behold, I, God, have suffered these things for all, that they might not suffer if they would repent;",
          "17. But if they would not repent they must suffer even as I;",
          "18. Which suffering caused myself, even God, the greatest of all, to tremble because of pain, and to bleed at every pore, and to suffer both body and spirit--and would that I might not drink the bitter cup, and shrink--",
          "19. Nevertheless, glory be to the Father, and I partook and finished my preparations unto the children of men."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Helaman 5:12",
        "verses" : [
          "12. And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Ephesians 4:11–14",
        "verses" : [
          "11. And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers;",
          "12. For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:",
          "13. Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ:",
          "14. That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine, by the sleight of men, and cunning craftiness, whereby they lie in wait to deceive;"
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 31:19–20",
        "verses" : [
          "19. And now, my beloved brethren, after ye have gotten into this strait and narrow path, I would ask if all is done? Behold, I say unto you, Nay; for ye have not come thus far save it were by the word of Christ with unshaken faith in him, relying wholly upon the merits of him who is mighty to save.",
          "20. Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 32:8–9",
        "verses" : [
          "8. And now, my beloved brethren, I perceive that ye ponder still in your hearts; and it grieveth me that I must speak concerning this thing. For if ye would hearken unto the Spirit which teacheth a man to pray ye would know that ye must pray; for the evil spirit teacheth not a man to pray, but teacheth him that he must not pray.",
          "9. But behold, I say unto you that ye must pray always, and not faint; that ye must not perform any thing unto the Lord save in the first place ye shall pray unto the Father in the name of Christ, that he will consecrate thy performance unto thee, that thy performance may be for the welfare of thy soul."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Matthew 16:15-19",
        "verses" : [
          "15. He saith unto them, But whom say ye that I am?",
          "16. And Simon Peter answered and said, Thou art the Christ, the Son of the living God.",
          "17. And Jesus answered and said unto him, Blessed art thou, Simon Bar-jona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven.",
          "18. And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it.",
          "19. And I will give unto thee the keys of the kingdom of heaven: and whatsoever thou shalt bind on earth shall be bound in heaven: and whatsoever thou shalt loose on earth shall be loosed in heaven."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "2 Nephi 28:7–9",
        "verses" : [
          "7. Yea, and there shall be many which shall say: Eat, drink, and be merry, for tomorrow we die; and it shall be well with us.",
          "8. And there shall also be many which shall say: Eat, drink, and be merry; nevertheless, fear God--he will justify in committing a little sin; yea, lie a little, take the advantage of one because of his words, dig a pit for thy neighbor; there is no harm in this; and do all these things, for tomorrow we die; and if it so be that we are guilty, God will beat us with a few stripes, and at last we shall be saved in the kingdom of God.",
          "9. Yea, and there shall be many which shall teach after this manner, false and vain and foolish doctrines, and shall be puffed up in their hearts, and shall seek deep to hide their counsels from the Lord; and their works shall be in the dark."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Alma 7:11–13",
        "verses" : [
          "11. And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people.",
          "12. And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.",
          "13. Now the Spirit knoweth all things; nevertheless the Son of God suffereth according to the flesh that he might take upon him the sins of his people, that he might blot out their transgressions according to the power of his deliverance; and now behold, this is the testimony which is in me."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Moroni 7:45, 47–48",
        "verses" : [
          "45. And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things.",
          "47. But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him.",
          "48. Wherefore, my beloved brethren, pray unto the Father with all the energy of heart, that ye may be filled with this love, which he hath bestowed upon all who are true followers of his Son, Jesus Christ; that ye may become the sons of God; that when he shall appear we shall be like him, for we shall see him as he is; that we may have this hope; that we may be purified even as he is pure. Amen."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "Exodus 20:3-17",
        "verses" : [
          "3. Thou shalt have no other gods before me.",
          "4. Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth:",
          "5. Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me;",
          "6. And shewing mercy unto thousands of them that love me, and keep my commandments.",
          "7. Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain.",
          "8. Remember the sabbath day, to keep it holy",
          "9. Six days shalt thou labour, and do all thy work:",
          "10. But the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates:",
          "11. For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.",
          "12. Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee.",
          "13. Thou shalt not kill.",
          "14. Thou shalt not commit adultery.",
          "15. Thou shalt not steal.",
          "16. Thou shalt not bear false witness against thy neighbour.",
          "17. Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's."
        ],
        "challenge" : "challenge"
      },
      {
        "name" : "JS—H 1:15–20",
        "verses" : [
          "15. After I had retired to the place where I had previously designed to go, having looked around me, and finding myself alone, I kneeled down and began to offer up the desires of my heart to God. I had scarcely done so, when immediately I was seized upon by some power which entirely overcame me, and had such an astonishing influence over me as to bind my tongue so that I could not speak. Thick darkness gathered around me, and it seemed to me for a time as if I were doomed to sudden destruction.",
          "16. But, exerting all my powers to call upon God to deliver me out of the power of this enemy which had seized upon me, and at the very moment when I was ready to sink into despair and abandon myself to destruction--not to an imaginary ruin, but to the power of some actual being from the unseen world, who had such marvelous power as I had never before felt in any being--just at this moment of great alarm, I saw a pillar of light exactly over my head, above the brightness of the sun, which descended gradually until it fell upon me.",
          "17. It no sooner appeared than I found myself delivered from the enemy which held me bound. When the light rested upon me I saw two Personages, whose brightness and glory defy all description, standing above me in the air. One of them spake unto me, calling me by name and said, pointing to the other--This is My Beloved Son. Hear Him!",
          "18. My object in going to inquire of the Lord was to know which of all the sects was right, that I might know which to join. No sooner, therefore, did I get possession of myself, so as to be able to speak, than I asked the Personages who stood above me in the light, which of all the sects was right (for at this time it had never entered into my heart that all were wrong)--and which I should join.",
          "19. I was answered that I must join none of them, for they were all wrong; and the Personage who addressed me said that all their creeds were an abomination in his sight; that those professors were all corrupt; that: \"they draw near to me with their lips, but their hearts are far from me, they teach for doctrines the commandments of men, having a form of godliness, but they deny the power thereof.\"",
          "20. He again forbade me to join with any of them; and many other things did he say unto me, which I cannot write at this time. When I came to myself again, I found myself lying on my back, looking up into heaven. When the light had departed, I had no strength; but soon recovering in some degree, I went home. And as I leaned up to the fireplace, mother inquired what the matter was. I replied, \"Never mind, all is well--I am well enough off.\" I then said to my mother, \"I have learned for myself that Presbyterianism is not true.\" It seems as though the adversary was aware, at a very early period of my life, that I was destined to prove a disturber and an annoyer of his kingdom; else why should the powers of darkness combine against me? Why the opposition and persecution that arose against me, almost in my infancy?"
        ],
        "challenge" : "challenge"
      }
    ];

    return data;
  });
})();
