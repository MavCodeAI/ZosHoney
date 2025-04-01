
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Leaf, Beaker, Award, Thermometer, AlertTriangle, Utensils } from 'lucide-react';

const HoneyGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-secondary-green/10 to-primary-gold/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-2">
              The Complete Honey Guide
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Learn everything about honey - from identification and selection to storage and usage. Discover the rich traditions of Pakistani honey.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="selection" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
              <TabsTrigger value="selection" className="flex flex-col items-center gap-1 py-3">
                <Leaf className="h-5 w-5" />
                <span>Selection</span>
              </TabsTrigger>
              <TabsTrigger value="identification" className="flex flex-col items-center gap-1 py-3">
                <Beaker className="h-5 w-5" />
                <span>Identification</span>
              </TabsTrigger>
              <TabsTrigger value="benefits" className="flex flex-col items-center gap-1 py-3">
                <Award className="h-5 w-5" />
                <span>Benefits</span>
              </TabsTrigger>
              <TabsTrigger value="storage" className="flex flex-col items-center gap-1 py-3">
                <Thermometer className="h-5 w-5" />
                <span>Storage</span>
              </TabsTrigger>
              <TabsTrigger value="adulteration" className="flex flex-col items-center gap-1 py-3">
                <AlertTriangle className="h-5 w-5" />
                <span>Adulteration</span>
              </TabsTrigger>
              <TabsTrigger value="recipes" className="flex flex-col items-center gap-1 py-3">
                <Utensils className="h-5 w-5" />
                <span>Recipes</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="selection" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">How to Select Quality Honey</h2>
                  <p className="text-gray-700 mb-4">
                    Selecting high-quality honey involves understanding several key factors that contribute to its authenticity, flavor, and health benefits. Pakistani honey, known for its diverse varieties, requires careful selection.
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-gray-700">
                    <li>Look for honey that has a rich, natural color appropriate for its variety - ranging from light amber to deep brown.</li>
                    <li>Quality honey has a distinct aroma that reflects its floral source.</li>
                    <li>The texture should be consistent with the variety - some are naturally crystallized while others remain liquid longer.</li>
                    <li>Consider the region of origin - different areas of Pakistan produce honey with unique characteristics.</li>
                    <li>Check for proper certification and lab testing to ensure purity.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-montserrat font-semibold mb-3">Pakistani Honey Varieties Guide</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-gold">Sidr Honey</h4>
                      <p className="text-gray-700 text-sm">Golden amber color with thick consistency. Rich aroma with caramel notes. Primarily from Sindh region.</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-primary-gold">Wild Berry Honey</h4>
                      <p className="text-gray-700 text-sm">Deep red color with medium consistency. Tangy with sweet berry undertones. From Northern Areas.</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-primary-gold">Acacia Honey</h4>
                      <p className="text-gray-700 text-sm">Light gold color with runny consistency. Mild and floral flavor. From Khyber Pakhtunkhwa.</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-primary-gold">Himalayan Mountain Honey</h4>
                      <p className="text-gray-700 text-sm">Crystal clear with medium-thick consistency. Clean, crisp with subtle floral notes. From the Himalayan Range.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="identification" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">How to Identify Pure Honey</h2>
                  <p className="text-gray-700 mb-4">
                    In a market where adulterated honey is unfortunately common, knowing how to identify pure, authentic honey is essential. Here are scientific and traditional tests:
                  </p>
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Scientific Methods</h3>
                  <ul className="space-y-3 list-disc pl-5 text-gray-700 mb-4">
                    <li><span className="font-medium">Polarimetry:</span> Pure honey is optically active and rotates polarized light.</li>
                    <li><span className="font-medium">Pollen Analysis:</span> Pure honey contains pollen from its floral source.</li>
                    <li><span className="font-medium">Carbon Isotope Ratio:</span> Identifies if sugar syrup has been added.</li>
                    <li><span className="font-medium">Lab Testing:</span> Zos tests all honey for purity and authenticity.</li>
                  </ul>
                  
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Traditional Tests</h3>
                  <ul className="space-y-3 list-disc pl-5 text-gray-700">
                    <li><span className="font-medium">Thumb Test:</span> Put a drop on your thumb - pure honey doesn't spread easily.</li>
                    <li><span className="font-medium">Water Test:</span> Pure honey settles at the bottom of a glass of water.</li>
                    <li><span className="font-medium">Flame Test:</span> Pure honey burns while adulterated honey creates bubbles or sputtering.</li>
                    <li><span className="font-medium">Crystallization:</span> Pure honey naturally crystallizes over time.</li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Pure honey identification" 
                    className="w-full h-72 object-cover rounded-lg mb-6"
                  />
                  <div className="bg-primary-gold/10 p-6 rounded-lg">
                    <h3 className="text-xl font-montserrat font-semibold mb-3">The Zos Quality Guarantee</h3>
                    <p className="text-gray-700 mb-4">
                      Every jar of Zos honey undergoes strict quality control procedures to ensure purity and authenticity:
                    </p>
                    <ul className="space-y-3 list-disc pl-5 text-gray-700">
                      <li>Sourced directly from verified beekeepers across Pakistan</li>
                      <li>Tested in internationally accredited laboratories</li>
                      <li>Traceable from hive to home with our QR code system</li>
                      <li>Zero additives, preservatives, or artificial ingredients</li>
                      <li>Stored and transported in optimal conditions to preserve natural properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="space-y-6">
              <h2 className="text-2xl font-montserrat font-semibold mb-4">Health Benefits of Honey</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="bg-primary-gold/20 p-4">
                    <h3 className="font-montserrat font-semibold text-lg">Nutritional Properties</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>Rich source of antioxidants</li>
                      <li>Contains enzymes and amino acids</li>
                      <li>Provides natural energy</li>
                      <li>Contains trace minerals and vitamins</li>
                      <li>Natural prebiotic properties</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="bg-primary-gold/20 p-4">
                    <h3 className="font-montserrat font-semibold text-lg">Medicinal Uses</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>Natural cough suppressant</li>
                      <li>Soothes sore throat</li>
                      <li>Aids in wound healing</li>
                      <li>Supports digestive health</li>
                      <li>Helps improve sleep quality</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="bg-primary-gold/20 p-4">
                    <h3 className="font-montserrat font-semibold text-lg">Traditional Uses</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>Used in Unani medicine</li>
                      <li>Ancient remedy for various ailments</li>
                      <li>Natural beauty treatment</li>
                      <li>Component in herbal preparations</li>
                      <li>Used in traditional Pakistani remedies</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-montserrat font-semibold mb-4">Benefits of Pakistani Honey Varieties</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary-gold mb-2">Sidr Honey</h4>
                    <p className="text-gray-700 mb-4">
                      Known for its exceptional medicinal properties, Sidr honey is highly valued in traditional medicine. It's particularly renowned for:
                    </p>
                    <ul className="space-y-1 list-disc pl-5 text-gray-700">
                      <li>Boosting immunity</li>
                      <li>Supporting liver health</li>
                      <li>Improving digestive system function</li>
                      <li>Natural energy enhancement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-gold mb-2">Himalayan Honey</h4>
                    <p className="text-gray-700 mb-4">
                      Harvested from the pristine Himalayan mountain range, this honey is known for its purity and unique properties:
                    </p>
                    <ul className="space-y-1 list-disc pl-5 text-gray-700">
                      <li>High mineral content from diverse wildflowers</li>
                      <li>Respiratory system support</li>
                      <li>Natural antibiotic properties</li>
                      <li>Helps in maintaining skin health</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="storage" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">Proper Honey Storage</h2>
                  <p className="text-gray-700 mb-4">
                    Proper storage is essential to maintain the quality, flavor, and beneficial properties of honey. When stored correctly, honey can last indefinitely without spoiling.
                  </p>
                  
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Storage Guidelines</h3>
                  <ul className="space-y-3 list-disc pl-5 text-gray-700 mb-6">
                    <li><span className="font-medium">Container:</span> Store in a glass jar with a tight-fitting lid.</li>
                    <li><span className="font-medium">Temperature:</span> Keep at room temperature (below 25°C is ideal).</li>
                    <li><span className="font-medium">Location:</span> Store in a dark, dry place away from direct sunlight.</li>
                    <li><span className="font-medium">Avoid refrigeration:</span> This accelerates crystallization.</li>
                    <li><span className="font-medium">Keep clean:</span> Always use a clean, dry spoon when handling.</li>
                  </ul>
                  
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Handling Crystallization</h3>
                  <p className="text-gray-700 mb-4">
                    Crystallization is a natural process and actually indicates pure, raw honey. If your honey crystallizes:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700">
                    <li>Place the honey jar in warm water (not exceeding 40°C)</li>
                    <li>Stir occasionally until crystals dissolve</li>
                    <li>Avoid microwave heating as it can destroy beneficial enzymes</li>
                    <li>Some varieties crystallize faster than others - this is normal</li>
                  </ul>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-3">Shelf Life of Honey</h3>
                    <p className="text-gray-700 mb-4">
                      Properly stored honey has an indefinite shelf life due to its natural properties:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">Low moisture content:</span> Prevents bacteria and microorganism growth</li>
                      <li><span className="font-medium">Natural acidity:</span> Creates an inhospitable environment for pathogens</li>
                      <li><span className="font-medium">Enzyme activity:</span> Produces hydrogen peroxide with antibacterial properties</li>
                      <li><span className="font-medium">High sugar concentration:</span> Creates osmotic pressure that inhibits microbial growth</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-gold/10 p-6 rounded-lg">
                    <h3 className="text-xl font-montserrat font-semibold mb-3">Honey Storage Myths Debunked</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Myth: Refrigeration keeps honey fresh</h4>
                        <p className="text-gray-700 text-sm">Fact: Refrigeration actually accelerates crystallization and isn't necessary for preservation.</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold">Myth: Crystallized honey has gone bad</h4>
                        <p className="text-gray-700 text-sm">Fact: Crystallization is a natural process and indicates pure, raw honey.</p>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold">Myth: Honey needs to be used within a year</h4>
                        <p className="text-gray-700 text-sm">Fact: Properly stored honey can last indefinitely, even thousands of years as evidenced by edible honey found in ancient Egyptian tombs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="adulteration" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-montserrat font-semibold mb-4">Understanding Honey Adulteration</h2>
                  <p className="text-gray-700 mb-4">
                    Honey adulteration is unfortunately common in many markets. Being able to recognize adulterated honey is crucial for consumers seeking authentic products.
                  </p>
                  
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Common Adulterants</h3>
                  <ul className="space-y-3 list-disc pl-5 text-gray-700 mb-6">
                    <li><span className="font-medium">Corn syrup:</span> The most common adulterant used to increase volume</li>
                    <li><span className="font-medium">Rice syrup:</span> Difficult to detect with conventional testing</li>
                    <li><span className="font-medium">Beet sugar:</span> Used to sweeten and extend honey</li>
                    <li><span className="font-medium">Inverted sugar:</span> Chemically similar to honey components</li>
                    <li><span className="font-medium">Water:</span> Added to increase weight and volume</li>
                  </ul>
                  
                  <h3 className="font-montserrat font-semibold text-lg mb-2">Red Flags</h3>
                  <p className="text-gray-700 mb-4">
                    Watch for these warning signs of potentially adulterated honey:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 text-gray-700">
                    <li>Extremely low price compared to market standards</li>
                    <li>Overly clear appearance lacking natural cloudiness</li>
                    <li>Excessive sweetness without complex flavor notes</li>
                    <li>Lack of proper crystallization over time</li>
                    <li>No information about the source or processing methods</li>
                    <li>Uniform consistency across different seasonal batches</li>
                  </ul>
                </div>
                
                <div>
                  <div className="bg-red-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-montserrat font-semibold mb-3 text-red-700">Health Risks of Adulterated Honey</h3>
                    <p className="text-gray-700 mb-4">
                      Consuming adulterated honey can pose various health risks:
                    </p>
                    <ul className="space-y-3 list-disc pl-5 text-gray-700">
                      <li>High fructose corn syrup may contribute to insulin resistance</li>
                      <li>Chemical additives can cause allergic reactions</li>
                      <li>Loss of beneficial properties found in authentic honey</li>
                      <li>Potential contamination with antibiotics or pesticides</li>
                      <li>Artificial sweeteners may cause digestive issues</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary-gold/10 p-6 rounded-lg">
                    <h3 className="text-xl font-montserrat font-semibold mb-3">The Zos Authenticity Guarantee</h3>
                    <p className="text-gray-700 mb-4">
                      At Zos, we take multiple measures to ensure you receive only pure, authentic honey:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li><span className="font-medium">Direct sourcing:</span> We work directly with trusted beekeepers across Pakistan</li>
                      <li><span className="font-medium">Multiple testing methods:</span> Including laboratory analysis for adulteration</li>
                      <li><span className="font-medium">Transparency:</span> Full disclosure of floral sources and harvest regions</li>
                      <li><span className="font-medium">Authenticity certificates:</span> Available for every batch we produce</li>
                      <li><span className="font-medium">QR code verification:</span> Scan to see test results for your specific honey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recipes" className="space-y-6">
              <h2 className="text-2xl font-montserrat font-semibold mb-4">Honey Recipes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612137247880-878694b8e2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey and yogurt breakfast bowl" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Honey Yogurt Breakfast Bowl</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      A nutritious breakfast featuring Pakistani Sidr honey drizzled over creamy yogurt with fresh fruits and nuts.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 5 mins</span>
                        <span className="mx-2">•</span>
                        <span>Easy</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Breakfast
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey ginger tea" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Pakistani Honey Ginger Tea</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Traditional Pakistani tea with a twist - infused with ginger and sweetened with mountain wildflower honey.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 10 mins</span>
                        <span className="mx-2">•</span>
                        <span>Easy</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Beverage
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey glazed chicken" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Acacia Honey Glazed Chicken</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Tender chicken marinated and glazed with Pakistani Acacia honey, herbs, and spices for a delicious main course.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 30 mins</span>
                        <span className="mx-2">•</span>
                        <span>Medium</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Main Course
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1582056509381-33e11b85733f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey face mask" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Honey Turmeric Face Mask</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Natural skincare recipe using Sidr honey and turmeric for glowing, healthy skin - a traditional Pakistani beauty secret.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 5 mins</span>
                        <span className="mx-2">•</span>
                        <span>Easy</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Beauty
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560180474-e8563fd75bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey walnut bread" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Wild Berry Honey Walnut Bread</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      A hearty bread sweetened with Pakistani wild berry honey and packed with nutritious walnuts.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 90 mins</span>
                        <span className="mx-2">•</span>
                        <span>Advanced</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Baking
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1514733670139-4d87a1941d55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Honey lemonade" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg mb-2">Himalayan Honey Lemonade</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Refreshing summer drink sweetened with pure Himalayan mountain honey instead of processed sugar.
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-gray-500">
                        <span>Prep: 15 mins</span>
                        <span className="mx-2">•</span>
                        <span>Easy</span>
                      </div>
                      <span className="text-xs font-medium bg-primary-gold/20 text-primary-gold rounded-full px-2 py-1">
                        Beverage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HoneyGuide;
