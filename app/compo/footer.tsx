import Link from 'next/link'
import React from 'react'
import BackToTop from './backToTop'

export default function Footer() {
  return (
    <div className="mt-2 p-10 rounded-t-[3rem] md:rounded-t-[5rem] border-2 border-b-8 border-fcolor">
      <h1 className="text-5xl text-fcolor font-inter font-black md:ml-8 uppercase bg-white w-fit -translate-y-16">Contact me</h1>
      <div>
        <Link href={"mailto:yugprajapati32@gmail.com"} className="flex justify-between items-baseline py-8 md:mx-32 hover:px-10 border-b-2 border-black">
          <h1 className="text-5xl font-bold uppercase">Email Me</h1>
          <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L30.2013 21C30.3962 21 30.5868 20.9431 30.7497 20.8362L41.9232 13.5087C43.7296 12.324 43.7296 9.67598 41.9232 8.49133L31.2492 1.49134C30.7604 1.17078 30.1886 1 29.604 1L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
        <Link href={"https://www.linkedin.com/in/yug-prajapati-70524926b/"} target="_blank" className="flex justify-between items-baseline py-8 md:mx-32 hover:px-10 border-b-2 border-black">
          <h1 className="text-5xl font-bold uppercase">Linkedin</h1>
          <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21L30.2013 21C30.3962 21 30.5868 20.9431 30.7497 20.8362L41.9232 13.5087C43.7296 12.324 43.7296 9.67598 41.9232 8.49133L31.2492 1.49134C30.7604 1.17078 30.1886 1 29.604 1L1 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
        <div className="mt-10 flex flex-wrap justify-between">
          <Link className="mt-10 flex items-center" href={"https://github.com/YUGE0"} target="_blank">
          <h1 className="text-3xl font-bold">GitHub</h1>
          <svg width="35px" height="35px" viewBox="-2.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></g></svg>
          </Link>
          <Link className="mt-10 flex items-center" href={"https://www.figma.com/@_yug"} target="_blank">
          <h1 className="text-3xl font-bold">Figma</h1>
          <svg width="35px" height="35px" viewBox="-94 -10 384 394" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000" stroke="#000000" stroke-width="0.0038400000000000005"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.304"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M64,384 C99.328,384 128,355.328 128,320 L128,256 L64,256 C28.672,256 0,284.672 0,320 C0,355.328 28.672,384 64,384 Z" fill="#0ACF83"> </path> <path d="M0,192 C0,156.672 28.672,128 64,128 L128,128 L128,256 L64,256 C28.672,256 0,227.328 0,192 Z" fill="#A259FF"> </path> <path d="M0,64 C0,28.672 28.672,0 64,0 L128,0 L128,128 L64,128 C28.672,128 0,99.328 0,64 Z" fill="#F24E1E"> </path> <path d="M128,0 L192,0 C227.328,0 256,28.672 256,64 C256,99.328 227.328,128 192,128 L128,128 L128,0 Z" fill="#FF7262"> </path> <path d="M256,192 C256,227.328 227.328,256 192,256 C156.672,256 128,227.328 128,192 C128,156.672 156.672,128 192,128 C227.328,128 256,156.672 256,192 Z" fill="#1ABCFE"> </path> </g> </g></svg>
          </Link>
          <Link className="mt-10 flex items-center" href={"https://www.linkedin.com/in/yug-prajapati-70524926b/"} target="_blank">
          <h1 className="text-3xl font-bold">Linked</h1>
          <svg width="38px" height="38px" viewBox="2 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
          </Link>
          <BackToTop/>
        </div>
      </div>
    </div>
  )
}
