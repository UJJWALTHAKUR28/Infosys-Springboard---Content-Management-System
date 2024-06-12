import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 ">
          <img className="object-cover  bg-yellow-300 w-full h-[50vh]" src="bg.jpg"alt=""/>
        
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xl text-orange-500 tracking-widest  title-font mb-1">Savor the flavors, indulge in memories.</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">UT RESTAURANT Elevating dining to an art form. </h1>
    </div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center " src="image.png" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">FAST FOOD</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">PIZZA</h1>
            <p class="leading-relaxed">"Embark on a culinary journey with our mouthwatering pizzas, perfect for any occasion. Crafted with the finest ingredients and baked to perfection, our pizzas are a symphony of flavors that will tantalize your taste buds. From classic margheritas to gourmet specialties loaded with premium toppings, each slice promises a burst of savory goodness that will leave you craving more. Whether you're hosting a casual gathering with friends or enjoying a cozy night in, our pizzas are the ultimate crowd-pleaser. </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Screenshot 2024-05-07 164320.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">SOUTH INDIAN THALI</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">DELICOUS DOSA, SAMBHAR,COCOBUT CREAMY DIP</h1>
            <p class="leading-relaxed">Embark on a culinary journey to South India with our authentic thali offerings, showcasing a symphony of flavors and textures that celebrate the region's rich culinary heritage. Indulge in a lavish spread featuring an array of aromatic curries, vibrant chutneys, fluffy rice, crispy papadums, and more. Each dish is lovingly prepared using traditional recipes and premium ingredients, ensuring an unforgettable dining experience that captures the essence of South Indian cuisine. Experience the dish. </p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Screenshot 2024-05-07 164611.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">FAST FOOD</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">UT SPECIAL BURGER</h1>
            <p class="leading-relaxed">Satisfy your hunger cravings in a flash with our delectable burgers, the quintessential fast food indulgence. Sink your teeth into juicy, flame-grilled patties nestled between soft, toasted buns, accompanied by a symphony of fresh toppings and savory sauces. Whether you crave the classic allure of a cheeseburger or the bold flavors of a gourmet specialty, our burgers are sure to hit the spot. Perfect for a quick lunch on the go or a late-night snack, our fast food burgers offer convenience without compromising on taste. T</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Screenshot 2024-05-07 164737.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">DESSERT</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">UT SPECIAL ICE CREAM</h1>
            <p class="leading-relaxed">Satisfy your sweet cravings with our tantalizing selection of ice creams served as desserts. Dive into a world of creamy, dreamy flavors that will transport you to paradise with every spoonful. Whether you prefer classic favorites like rich chocolate or adventurous blends of exotic fruits, our decadent ice creams are sure to delight your taste buds and leave you craving for more. Treat yourself to a refreshing and indulgent experience that promises to cool you down while adding a delightful touch to any meal.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Screenshot 2024-05-07 164858.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">BBQ SPECIAL</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">PANEER TIKKA</h1>
            <p class="leading-relaxed">xperience the thrill of the grill with our sensational BBQ kabobs and tikkas, packed with smoky, succulent goodness. Each skewer is meticulously marinated and expertly grilled to perfection, ensuring tender meat infused with bold, aromatic spices. Whether you're a fan of juicy chicken tikka or crave the robust flavors of lamb kabobs, our BBQ offerings are a feast for the senses. Gather around the grill and savor the camaraderie as you indulge in these irresistible delights.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="Screenshot 2024-05-07 165134.png"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-orange-600 mb-1">NORTH INDIAN CUISINE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">SPECIAL NORTH INDIAN THALI</h1>
            <p class="leading-relaxed">Delight in the rich and diverse flavors of North India with our exquisite thali, a culinary masterpiece that showcases the region's vibrant gastronomic heritage. Dive into a sumptuous spread featuring an array of aromatic curries, fragrant rice, freshly baked bread, tangy pickles, and creamy raita. Each dish is carefully crafted using traditional recipes and authentic spices, ensuring a symphony of flavors that will tantalize your taste buds. Whether you're craving , our North Indian thali has something for everyone</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <button className="flex mx-auto mt-16 items-center text-white bg-orange-500 border-0 py-3 px-4 focus:outline-no hover:bg-orange-600 rounded text-sm md:mt-4">ORDER NOW      
      </button>
  </div>
</section>
      </div>
    </div>
  )
}