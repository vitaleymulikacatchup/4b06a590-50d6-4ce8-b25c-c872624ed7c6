"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Star, Bed, Sparkles, Droplet, Heart, UtensilsCrossed, Wine, Waves, Umbrella, Dumbbell, Users, Award, HelpCircle } from 'lucide-react';

export default function LuxeStayPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="none"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Luxe Stay"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Welcome to Luxe Stay"
          description="Experience unparalleled comfort and elegance. From world-class amenities to personalized service, discover why discerning travelers choose us."
          tag="5-Star Hospitality"
          tagIcon={Star}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996543217-zuxh0fkg.jpg"
          imageAlt="Luxury hotel lobby with elegant interior"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Our Room Collection"
          description="Choose from our carefully curated selection of rooms and suites, each designed for maximum comfort and style"
          tag="Premium Accommodations"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",
              brand: "Luxe Stay",
              name: "Standard Room",
              price: "$99/night",
              rating: 4,
              reviewCount: "342",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996545556-1r18gjoy.jpg",
              imageAlt: "Standard room with modern furnishings"
            },
            {
              id: "2",
              brand: "Luxe Stay",
              name: "Deluxe Room",
              price: "$149/night",
              rating: 5,
              reviewCount: "521",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996544842-s2wnyz1g.jpg",
              imageAlt: "Deluxe room with premium amenities"
            },
            {
              id: "3",
              brand: "Luxe Stay",
              name: "Executive Suite",
              price: "$249/night",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996544199-rxnllh2o.jpg",
              imageAlt: "Executive suite with panoramic views"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTen
          title="World-Class Amenities"
          description="Indulge in our comprehensive facilities designed to elevate your stay to perfection"
          tag="Premium Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body with our full-service spa featuring massages, facials, and wellness treatments",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996546258-rnkfhefv.jpg"
              },
              reverse: false,
              items: [
                {
                  icon: Droplet,
                  text: "Sauna and steam rooms"
                },
                {
                  icon: Heart,
                  text: "Professional therapists"
                }
              ]
            },
            {
              id: "2",
              title: "Fine Dining Restaurant",
              description: "Savor exquisite culinary creations prepared by our award-winning chefs using premium ingredients",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996546999-bduk9uzj.jpg"
              },
              reverse: true,
              items: [
                {
                  icon: UtensilsCrossed,
                  text: "International cuisine"
                },
                {
                  icon: Wine,
                  text: "Curated wine selection"
                }
              ]
            },
            {
              id: "3",
              title: "Olympic-Sized Pool",
              description: "Swim, relax, or sunbathe at our stunning outdoor pool surrounded by tropical gardens",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996547741-ajh8gun4.jpg"
              },
              reverse: false,
              items: [
                {
                  icon: Waves,
                  text: "Temperature-controlled water"
                },
                {
                  icon: Umbrella,
                  text: "Cabana lounge areas"
                }
              ]
            },
            {
              id: "4",
              title: "State-of-the-Art Fitness Center",
              description: "Stay fit with our fully equipped gym featuring the latest exercise equipment and personal training",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996548557-akui1t7b.jpg"
              },
              reverse: true,
              items: [
                {
                  icon: Dumbbell,
                  text: "Latest exercise equipment"
                },
                {
                  icon: Users,
                  text: "Expert fitness coaches"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Reviews"
          description="Hear from our satisfied guests about their unforgettable stays"
          tag="Highly Rated"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              role: "CEO",
              testimonial: "Luxe Stay exceeded all my expectations. The attention to detail, exceptional service, and luxurious accommodations made my stay truly memorable. I will definitely return.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996549312-oebgatmh.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Travel Consultant",
              testimonial: "From the moment I arrived, the staff made me feel welcome. The rooms are impeccable, the food is outstanding, and every amenity is top-notch. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996550075-o819aipg.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              role: "Business Owner",
              testimonial: "Perfect for business travel. High-speed internet, comfortable workspace, and excellent service. I've recommended Luxe Stay to all my colleagues.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996551031-ppgn0suk.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "4",
              name: "Emma Thompson",
              role: "Marketing Director",
              testimonial: "The spa was incredible, the food was delicious, and the entire experience was flawless. This is luxury done right. Worth every penny!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996551718-qeamch1w.jpg",
              imageAlt: "Emma Thompson"
            }
          ]}
        />
      </div>

      <div id="faqs" data-section="faqs">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay with us"
          tag="Guest Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are the check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability. Please contact our front desk for assistance."
            },
            {
              id: "2",
              title: "Do you offer free Wi-Fi?",
              content: "Yes, complimentary high-speed Wi-Fi is available throughout the hotel, including all guest rooms, lobby, and public areas."
            },
            {
              id: "3",
              title: "Is parking available?",
              content: "We offer both complimentary and valet parking. Complimentary parking is available in our main lot, and valet service is available for premium guests."
            },
            {
              id: "4",
              title: "What is your cancellation policy?",
              content: "Reservations can be cancelled up to 48 hours before arrival for a full refund. Cancellations within 48 hours may incur charges. Please check your booking confirmation for specific terms."
            },
            {
              id: "5",
              title: "Do you have pet-friendly rooms?",
              content: "Yes, select rooms are pet-friendly. We welcome well-behaved pets with a one-time cleaning fee. Please mention your pet when booking."
            },
            {
              id: "6",
              title: "Is room service available?",
              content: "Yes, 24-hour room service is available. You can order from our full menu or customize your meal with our culinary team."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Book Your Stay?"
          description="Contact our reservations team today. We're here to help you plan the perfect getaway."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35vffk4xh1DqzFgStLz35sgQAAW/uploaded-1763996552667-2lxb5zvq.jpg"
          imageAlt="Hotel reception desk"
          mediaPosition="right"
          buttonText="Send Inquiry"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "checkIn",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your stay preferences, special requests, or questions...",
            rows: 5,
            required: false
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Luxe Stay"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Our Story",
                  href: "#story"
                },
                {
                  label: "Careers",
                  href: "#careers"
                }
              ]
            },
            {
              items: [
                {
                  label: "Rooms",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "#dining"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "#support"
                },
                {
                  label: "Reservations",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#privacy"
                },
                {
                  label: "Terms of Service",
                  href: "#terms"
                },
                {
                  label: "Accessibility",
                  href: "#accessibility"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}