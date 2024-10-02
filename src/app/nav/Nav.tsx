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
              title: "Blog categories",
              subMenuLinks: [
                {
                  url: "#",
                  title: "Category One",
                },
              ],
            },
            blogCategories: [
              {
                url: "/signature",
                image: {
                  src: "/images/esignature-modal.png",
                  alt: "placeholder image 1",
                },
                title: "ESignature Component",
                description: "Fun esignature component and mural",
                button: { title: "Check it out", variant: "link", size: "link" },
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                  alt: "placeholder image 2",
                },
                title: "Todo List",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                button: { title: "Read more", variant: "link", size: "link" },
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                  alt: "placeholder image 3",
                },
                title: "Article Title",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                button: { title: "Read more", variant: "link", size: "link" },
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