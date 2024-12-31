"use client";  

const CategoriesSection = () => {  
  return (  
    <div className="w-full max-w-7xl mx-auto px-4 py-12">  
      <div className="grid grid-cols-4 gap-6">  
        {/* Icons Column */}  
        <div>  
          <h3 className="text-lg font-semibold text-black/80 mb-2">Icons</h3>  
          <ul className="list-none text-black/50">  
            <li>Air Force 1</li>  
            <li>Huarache</li>  
            <li>Air Max 90</li>  
            <li>Air Max 95</li>  
          </ul>  
        </div>  

        {/* Shoes Column */}  
        <div>  
          <h3 className="text-lg font-semibold text-black/80 mb-2">Shoes</h3>  
          <ul className="list-none text-black/50">  
            <li>All Shoes</li>  
            <li>Custom Shoes</li>  
            <li>Jordan Shoes</li>  
            <li>Running Shoes</li>  
          </ul>  
        </div>  

        {/* Clothing Column */}  
        <div>  
          <h3 className="text-lg font-semibold text-black/80 mb-2">Clothing</h3>  
          <ul className="list-none text-black/50">  
            <li>All Clothing</li>  
            <li>Modest Wear</li>  
            <li>Hoodies & Pullovers</li>  
            <li>Shirts & Tops</li>  
          </ul>  
        </div>  

        {/* Kids' Column */}  
        <div>  
          <h3 className="text-lg font-semibold text-black/80 mb-2">Kids'</h3>  
          <ul className="list-none text-black/50">  
            <li>Infant & Toddler Shoes</li>  
            <li>Kids' Shoes</li>  
            <li>Kids' Jordan Shoes</li>  
            <li>Kids' Basketball Shoes</li>  
          </ul>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default CategoriesSection;