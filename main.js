var i= 0;
var teaminfo=[
  "Daddy:He is a funny and kind perosn.His birthday is December 25th or as many know it as,Christmas!He helps us with a lot of things and gets what we want.🎁",
  "Mommy:Mommy birthday is August 4.She does so much like help us with homework and activites and also make us yummy food as well😋.",
  "Sahas:That's is me. I am 10 years old and my birthday is July 9.I am nice and kind and I am always scoring top marks in my classes.🏫",
  "Dhiya:Dhiya is 6 years old. Her birthday is Febuary 21. She is playful and kind to me and I love her so much.♥",
  "The Etikyala Family:We are one great family who always are loving and kind."
];
var image =[
"https://previews.123rf.com/images/lineartist/lineartist1907/lineartist190700642/127438335-online-laptop-indian-cartoon-man-father-vector-illustration.jpg",
"https://media.istockphoto.com/vectors/cute-smiling-indian-girl-in-colorful-clothes-and-red-point-vector-id1208610884",
 "https://sdk.bitmoji.com/render/panel/3e65fa6b-bc0b-4dc4-a110-2f92106e3d57-97292684-e113-45b7-8e03-182e822d5353-v1.png?transparent=1&palette=1",
"https://previews.123rf.com/images/robuart/robuart1710/robuart171000041/87289071-indian-girl-with-long-black-hair.jpg",
"https://st.depositphotos.com/1967477/4473/v/950/depositphotos_44735787-stock-illustration-happy-family-cartoon.jpg"
];
function nextslide(){
  document.getElementById("sunrisers2020").src=image[i];
  document.getElementById("info").innerHTML=teaminfo[i];
  i++;
  if(i==5){
    i=0;
  }
}