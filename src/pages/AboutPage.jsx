import React from "react";
import AboutCSS from "../styles/pages/about.module.css";

export const AboutPage = () => {
  return (
    <div className={AboutCSS.about_wrapper}>
      <h2 className={AboutCSS.about_title}>
        Glassware? You got it. We’ve gathered it all: everyday cups for water
        and orange juice, fancy tumblers for extra-snazzy drinks—and let’s not
        forget all the wine glasses{" "}
      </h2>
      <img
        className={AboutCSS.about_img}
        src="https://images.food52.com/JO2WcIhgTEwcDaAXj80wCTueGaw=/544x544/fe8c0aea-0db3-4c56-b035-e1bb5a7a7d89--2022-0323_fortessa_shatterproof-tritan-outdoor-margarita_mixed-color_gif-still_1x1_rocky-luten.gif"
        alt="about"
      />
      <h2 className={AboutCSS.about_title}>
        Hear It From Our Experts. Check out what Kayla Roolaart, our resident
        Table and Barware Associate Buyer, has to say about finding the perfect
        glass:
      </h2>
      <p>
        Most people have wine glasses in their collection, but do you serve all
        wine in the same type of glass? The shape of the glass can affect the
        taste of the wine, as it changes how much the wine can ‘breathe’ and the
        vapours it lets off. Red wine glasses are taller and have a larger bowl
        than glasses for white wine. This gives the wine enough space to
        interact with the air, allowing the big, bold flavours to develop. There
        are even different styles of red wine glasses which are better suited to
        different wines. The Bordeaux glass has a wide bowl, allowing maximum
        space for the wine to interact with oxygen in the air, whilst a Burgundy
        glass has a wide brim which is perfect for light-bodied reds. The longer
        stem in white wine glasses puts distance between your hand and the bowl
        of the glass, meaning the wine will stay cooler for longer.
      </p>
      <h2 className={AboutCSS.about_title}>Contact Us</h2>
      <p>
        Telephone: +44 (0)1903 786148
      </p>
      <p>Email:
        info@glassware42.co.uk</p>
    </div>
  );
};
