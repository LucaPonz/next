"use client"

import { Button } from "@nextui-org/button";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppTopBar(props:{
  isDashboard: boolean
}) {

  const router = usePathname();

        return (
            <Navbar isBordered maxWidth="2xl"
            classNames={{item:[
              "data-[active=true]:font-bold"
            ]}}>
              <NavbarBrand>
                <p className="font-bold text-inherit uppercase">Angelica Stella Personal Pilates</p>
              </NavbarBrand>
              <NavbarContent className="hidden sm:flex gap-4" justify="center">

              {props.isDashboard !== true ?
                <>
                <NavbarItem isActive={ router === "/" }>
                  <Link href="/">
                    Planner
                  </Link>
                </NavbarItem>
                <NavbarItem isActive={ router === "/clients" }>
                  <Link href="/clients">
                    Clienti
                  </Link>
                </NavbarItem>
                </>
              : null
              }

              </NavbarContent>

              <NavbarContent justify="end">

                {props.isDashboard !== true ?
                <>
                  <NavbarItem className="hidden lg:flex">
                    <Link href="/app/dashboard">Login</Link>
                  </NavbarItem>
                  <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                      Sign Up
                    </Button>
                  </NavbarItem>
                </>
                :
                  <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Sign Out</Link>
                  </NavbarItem>
                }
                
              </NavbarContent>
            </Navbar>
          )
}