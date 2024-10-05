import React from 'react'
import Navbar1 from '@/components/sections/navs/NavBar1'

const NavBar = () => {
  return (
    <Navbar1
      logoSlot={[
        <a href={"/"} className="flex items-center">
          <p className="font-bold text-2xl bg-gradient-to-r from-indigo-400 to-red-400 text-transparent bg-clip-text"
          >Ernesto J Ballon</p>
        </a>
      ]}
      navLinks={[
        { title: "Home", url: "/" },
        { title: "Blog", url: "/blog" },

        {
          title: "Showcase",
          url: "#",
          megaMenu: {
            linkGroup: {
              title: "Projects",
              subMenuLinks: [
                // {
                //   url: "#",
                //   title: "Category One",
                // },
              ],
            },
            blogCategories: [
              {
                url: "https://www.acostadmacleaning.com/",
                image: {
                  src: "/images/acostadma-site.png",
                  alt: "acostadma site",
                },
                title: "Website acostaDMACleaning",
                description: "Website for acostaDMACleaning",
                button: { title: "Go to site", variant: "link", size: "link" },
              },
              {
                url: "/signature",
                image: {
                  src: "/images/esignature-modal.png",
                  alt: "signature modal",
                },
                title: "ESignature Component",
                description: "Fun esignature component and mural",
                button: { title: "Check it out", variant: "link", size: "link" },
              },
              {
                url: "/playground",
                image: {
                  src: "/images/js-playground.png",
                  alt: "js playground",
                },
                title: "JS playground",
                description: "Playground for js code",
                button: { title: "Check it out", variant: "link", size: "link" },
              },

              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                  alt: "placeholder image 4",
                },
                title: "Article Title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                button: { title: "Read more", variant: "link", size: "link" },
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                  alt: "placeholder image 5",
                },
                title: "Article Title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                button: { title: "Read more", variant: "link", size: "link" },
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                  alt: "placeholder image 6",
                },
                title: "Article Title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                button: { title: "Read more", variant: "link", size: "link" },
              },
            ],
          },
        },
      ]

      }
      buttons={[
        {
          title: "Sign In",
          variant: "default",
          size: "lg",
        },
        {
          title: "Sign Up",
          variant: "variant",
          size: "lg",
        },
      ]

      }

    />
  )
}

export default NavBar