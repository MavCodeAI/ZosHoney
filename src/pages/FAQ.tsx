
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-secondary-green/10 to-primary-gold/10 py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Find answers to common questions about our honey, ordering process, and more.
            </p>
          </div>
        </div>
        
        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for questions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Button
              variant="outline"
              className="py-6 border-primary-gold/30 hover:bg-primary-gold/10 hover:border-primary-gold"
            >
              <span className="text-center w-full font-montserrat">Product Information</span>
            </Button>
            <Button
              variant="outline"
              className="py-6 border-primary-gold/30 hover:bg-primary-gold/10 hover:border-primary-gold"
            >
              <span className="text-center w-full font-montserrat">Ordering & Shipping</span>
            </Button>
            <Button
              variant="outline"
              className="py-6 border-primary-gold/30 hover:bg-primary-gold/10 hover:border-primary-gold"
            >
              <span className="text-center w-full font-montserrat">Honey Uses & Storage</span>
            </Button>
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Product Information</h2>
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What makes Zos honey different from other honey brands?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Zos honey is sourced directly from verified beekeepers across Pakistan's most pristine regions. 
                    Unlike many commercial brands, we never blend, heat-treat, or ultra-filter our honey, preserving 
                    all the natural enzymes, pollen, and beneficial properties. Every batch is lab-tested for purity 
                    and authenticity, ensuring you receive only the highest quality, 100% pure Pakistani honey.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  How can I verify the authenticity of Zos honey?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Each jar of Zos honey comes with a unique QR code that you can scan to access detailed information 
                    about your specific batch, including its floral source, region of origin, harvesting date, and 
                    laboratory test results. This transparency allows you to verify the authenticity and quality of 
                    your honey. Additionally, we publish our full testing protocols and certification details on our website.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  Why does the color and taste of honey vary between varieties?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    The color, flavor, aroma, and texture of honey are primarily determined by the floral source from 
                    which bees collect nectar. Different flowers contain varying types and amounts of nectar components, 
                    resulting in unique honey profiles. For example, Sidr honey is typically amber-colored with a rich 
                    caramel flavor, while Acacia honey is lighter with more subtle, floral notes. Regional factors such 
                    as climate, soil conditions, and altitude also influence these characteristics.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  Are your honey products organic?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    While we follow organic harvesting and processing practices, not all our honey can be officially 
                    certified as organic. This is because bees forage freely within a large radius, and it's challenging 
                    to guarantee that 100% of their nectar comes from officially certified organic sources. However, we 
                    specifically select remote, pristine regions for our beehives, far from industrial agriculture and 
                    pollution. Our regular testing confirms our honey is free from pesticides, antibiotics, and other contaminants.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  What is seasonal honey and why is it only available at certain times?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Seasonal honey is collected during specific flowering periods of certain plants. For example, our 
                    Wild Berry honey is only available after the summer berry bloom in Northern Pakistan. These seasonal 
                    varieties have unique flavor profiles and properties that can only be captured during their natural 
                    flowering seasons. We never artificially replicate these flavors or blend honeys to simulate seasonal 
                    varieties, which is why they're only available during certain months of the year. This seasonal approach 
                    ensures authenticity and supports sustainable beekeeping practices.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Ordering & Shipping</h2>
            <Accordion type="single" collapsible className="mb-10">
              <AccordionItem value="order-1">
                <AccordionTrigger className="text-lg font-medium">
                  How can I place an order for Zos honey?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    You can place an order directly through our website by browsing our shop and adding products to your cart. 
                    Alternatively, you can also order via WhatsApp by messaging our customer service number at +92 300 1234567. 
                    Our representatives are available from 9 AM to 10 PM (PKT) to assist you with your order and answer any questions.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="order-2">
                <AccordionTrigger className="text-lg font-medium">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    We accept various payment methods to provide convenience for our Pakistani customers:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Cash on Delivery (COD)</li>
                    <li>EasyPaisa</li>
                    <li>JazzCash</li>
                    <li>Bank transfer</li>
                    <li>Credit/Debit cards</li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    All online payments are secured with industry-standard encryption to ensure your financial information remains safe.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="order-3">
                <AccordionTrigger className="text-lg font-medium">
                  How long will it take to receive my order?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Delivery times vary based on your location in Pakistan:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Major cities (Karachi, Lahore, Islamabad): 1-3 business days</li>
                    <li>Other urban areas: 2-4 business days</li>
                    <li>Remote areas: 3-7 business days</li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    We partner with trusted courier services like TCS and Leopards Courier to ensure reliable delivery. 
                    Once your order is dispatched, you'll receive a tracking number to monitor your package's journey.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="order-4">
                <AccordionTrigger className="text-lg font-medium">
                  Do you ship internationally?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Yes, we do ship internationally to select countries. International shipping typically takes 7-14 business days 
                    depending on the destination country and local customs processing. Please note that international customers may 
                    be responsible for import duties and taxes levied by their country's customs authorities. Contact our customer 
                    service for more details about international shipping options and rates for your specific location.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="order-5">
                <AccordionTrigger className="text-lg font-medium">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Due to the nature of honey products, we cannot accept returns once the product has been opened. However, 
                    if you receive damaged products or if there's a mistake in your order, please contact us within 48 hours 
                    of delivery with photos of the damaged items. For unopened products, we offer a 7-day return policy. 
                    All returns must be in their original packaging. Once we receive and verify the returned items, we'll 
                    process a refund or replacement as per your preference.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Honey Uses & Storage</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="storage-1">
                <AccordionTrigger className="text-lg font-medium">
                  How should I store my honey to maintain its quality?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Store your honey in its original glass jar with the lid tightly closed, at room temperature (below 25°C) 
                    in a dry place away from direct sunlight. Avoid refrigeration as it accelerates crystallization. 
                    Always use a clean, dry spoon when handling honey to prevent introducing moisture or contaminants. 
                    When stored properly, honey can last indefinitely without spoiling.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storage-2">
                <AccordionTrigger className="text-lg font-medium">
                  My honey has crystallized. Is it still good to use?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Yes, crystallization is a natural process and actually indicates pure, raw honey. Different varieties 
                    crystallize at different rates - for example, Sidr honey tends to crystallize slower than Acacia honey. 
                    To return crystallized honey to a liquid state, place the jar in warm water (not exceeding 40°C) and 
                    stir occasionally until the crystals dissolve. Avoid microwave heating as it can destroy beneficial enzymes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storage-3">
                <AccordionTrigger className="text-lg font-medium">
                  What are the health benefits of consuming honey regularly?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Regular consumption of pure, raw honey may provide numerous health benefits, including:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-700">
                    <li>Antioxidant properties that help combat oxidative stress</li>
                    <li>Support for digestive health</li>
                    <li>Soothing effects on sore throats and coughs</li>
                    <li>Potential immune system support</li>
                    <li>Natural energy boost without refined sugars</li>
                    <li>Traditional uses in wound healing and skin care</li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    Different varieties of honey may offer specific benefits - for example, Sidr honey is traditionally 
                    valued for respiratory health, while Himalayan honey is known for its high mineral content.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storage-4">
                <AccordionTrigger className="text-lg font-medium">
                  Is honey safe for everyone to consume?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    While honey is generally safe for most people, it should not be given to infants under 12 months old due 
                    to the risk of infant botulism. People with specific bee-related allergies should also exercise caution. 
                    Individuals with diabetes should consult with their healthcare providers about incorporating honey into 
                    their diet, as it does contain natural sugars, although it has a lower glycemic index than refined sugar.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="storage-5">
                <AccordionTrigger className="text-lg font-medium">
                  Can I use honey in cooking and baking?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Yes, honey is an excellent natural sweetener for cooking and baking. When substituting honey for sugar, 
                    use about 3/4 cup of honey for every cup of sugar and reduce the other liquids in the recipe by about 
                    1/4 cup. Also, add 1/4 teaspoon of baking soda for each cup of honey used and lower your oven temperature 
                    by 25°F as honey causes baked goods to brown more quickly.
                  </p>
                  <p className="mt-2 text-gray-700">
                    Different honey varieties can enhance specific dishes - for example, our Sidr honey pairs wonderfully 
                    with savory dishes and cheeses, while Berry honey complements desserts and breakfast foods. Check our 
                    Honey Guide section for specific recipe suggestions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Question not answered */}
          <div className="max-w-3xl mx-auto mt-16 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-montserrat font-semibold mb-3">Didn't find your answer?</h3>
            <p className="text-gray-700 mb-6">
              Our customer service team is here to help. Send us your question and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="w-full"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your question"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                ></textarea>
              </div>
              <Button className="bg-primary-gold hover:bg-primary-gold/90">
                Submit Question
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
