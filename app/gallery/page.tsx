'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import PageHeader from '@/components/PageHeader';

const featuredProjects = [
  {
    title: "All the Bells and Whistles",
    description: "Complete construction documentation of a luxury pool featuring every premium amenity. Follow the entire build process from excavation to completion.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566782628-XBE4KO8B3SR65LSR8ZJM/Image-102.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566409980-48QNUEBG8AIH6N5QZ6Q0/Image-83.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566427775-30EZVNIPNR71EGPGK23I/Image-109.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566449596-M31VUSX2QA58ABXBAVLX/Image-133.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566782628-XBE4KO8B3SR65LSR8ZJM/Image-102.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566409980-48QNUEBG8AIH6N5QZ6Q0/Image-83.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566427775-30EZVNIPNR71EGPGK23I/Image-109.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566449596-M31VUSX2QA58ABXBAVLX/Image-133.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566349869-ADHG73R6DJRZB23FH8PR/Image-28.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566361950-VQP7TY7099UN856O5IR7/Image-38.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566388164-RMQK7RNRGNV0ZS4LOBPE/Image-58.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566428718-MDJ3RYOHH6W9JMVBL51G/Image-110.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566333001-1PSKQPDA49BLURHIR9JS/Image-14.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566354814-LOPQMPYVEHL3S20P35IO/Image-32.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566408746-ECBMZ4R5O2JZSJAY4DT6/Image-81.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566449070-QC6Q3AO8E2CBXBUWRMO9/Image-132.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566407596-DC6T0KSPTZ45W9YTBTQT/Image-79.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566376090-I5VX7KB4ZPX7Y4DOQTW8/Image-49.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566396602-JI4X3JC7T18ZEJ7J0AIM/Image-66.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566456671-MGY3TFIXT3MF0VSWCNF9/Image-140.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566358682-AIIZYL48RX2NAM5O9D7P/Image-35.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566342508-BHEA7XEBJ6Z5D1CKYOM4/Image-22.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566422331-GNBUD3DDNOA0KGGFZVRZ/Image-102.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566395435-LDDPCI2ZQ30VQ6NB91NK/Image-65.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566399685-46EYQGSG3E8X4ZYCAAX0/Image-69.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566405879-67QBC914RHULMHD7QGHX/Image-77.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566327044-B2KEX4SDW9OOSKP7JK75/Image-09.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566351839-T8IDG7P2YRTEZJ0BRW8E/Image-29.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650566404351-GGGXNYM2DBGBE7PRNQQC/Image-76.jpg",
    ],
  },
  {
    title: "Stunning Lap Pool",
    description: "A beautiful lap pool design showcasing clean lines and elegant simplicity. Perfect for fitness enthusiasts and modern aesthetics.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081085279-GBXXG83Y8UO4BV8T7LX4/IMG_7161_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081078237-FK9S4NQ0A85DZZA96OSY/IMG_7157_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081051345-OQQZ0KPTT17Y3JE4I36N/IMG_7147_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081047157-3HFWXBZRX7PIRK6CXKZH/IMG_7146_2.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081085279-GBXXG83Y8UO4BV8T7LX4/IMG_7161_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081078237-FK9S4NQ0A85DZZA96OSY/IMG_7157_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081051345-OQQZ0KPTT17Y3JE4I36N/IMG_7147_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081047157-3HFWXBZRX7PIRK6CXKZH/IMG_7146_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081054590-9SYTE5HQP77A3P2ZGWFQ/IMG_7148_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081039668-VZZF2V3FZV0GLWJLMABP/IMG_7143_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081064181-EC6RF0XOX0MA8A4I3IXR/IMG_7153_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081063729-KUXJQ0E0TVP7JCS6C5X8/IMG_7151_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081094511-53JOZDO2DTGER10WMCWC/IMG_7164_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081058354-5SNWZKO7VVJ5WCG5MJS9/IMG_7149_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081072810-SKE699PULWZLZHOKK9MA/IMG_7155_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081080223-5LAYT6JAJPW0ID3HJSBR/IMG_7159_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081045376-5926LI4ZAY8AMFVXKT8B/IMG_7144_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081091415-FTZBQT17YYNZIKL74WM3/IMG_7163_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081098734-U08MKIE0SMN1BXL5JYO9/IMG_7165_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081038544-M52FIS0R15UHVVOWOIUU/IMG_7142_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081137708-9SFT2PLURO3UFXZWCK5B/image-asset.jpeg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081088045-IHX0FYB5ONSMACAQVMVV/IMG_7162_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1423081071459-2G2N3B8WEMLC6G2R8WH3/IMG_7156_2.jpg",
    ],
  },
  {
    title: "Pool With a View",
    description: "A stunning hillside pool design that maximizes the breathtaking views. This extensive gallery showcases every angle of this remarkable project.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400701212-X63WFJ3460MSIJDHWPX0/Casas-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400701523-S9XYHZZASWRKDLOS1H6E/Casas-2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400707498-VIGAHGXJ6PCBG0GHZWUO/Casas-3.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400708731-6VUCNX90R6JKAPJT51U7/Casas-4.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400701212-X63WFJ3460MSIJDHWPX0/Casas-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400701523-S9XYHZZASWRKDLOS1H6E/Casas-2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400707498-VIGAHGXJ6PCBG0GHZWUO/Casas-3.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400708731-6VUCNX90R6JKAPJT51U7/Casas-4.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400712993-LD7AZ0CQDS8MQCKLXI1D/Casas-5.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400715926-AP5B2QLGNJM3JWCCJLL4/Casas-6.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400719767-GEBXZYN1VRU8HKJF1PG3/Casas-7.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400723731-3SYP0BJJM8L5IH097AKD/Casas-8.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400726747-LX1B3JUX4RUM56GQYFFG/Casas-9.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400730846-30CP78AAR8DMQNDHXZVB/Casas-10.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400732947-50VP2RGQJD2CT2J4HYPX/Casas-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400737066-R6FTK027MFBXU43FWVKK/Casas-12.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400739956-A6V9K9K4351N05G6QZMH/Casas-13.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400744677-28H4Z8XDTOQSX27DDZVK/Casas-14.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400744832-NAW927PUACXDFYBDBRIW/Casas-15.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400750979-C00U3QVSNBDVXRTOPJZB/Casas-16.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400751234-U3BCTQJ568QVKECEM566/Casas-17.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400757771-O3T47G3552LOTY4R7FNL/Casas-18.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400757281-TJMJIQTO205QHT23VRCF/Casas-19.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400763488-G86CX0JNPQL4MANQKVD1/Casas-20.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400764198-W6Y4XLWHPZ2G67TQO9SR/Casas-21.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400769996-QYGXWUD9NW41LRCKCGJM/Casas-22.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400770692-U10R44QU7IHVD43T12QE/Casas-23.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1425400776304-64NF4LE0UUQVZA8FZCS6/Casas-24.jpg",
    ],
  },
  {
    title: "Compact Design",
    description: "Proof that you don't need a huge backyard to have a stunning pool. This compact design maximizes every inch of space while delivering on style and functionality.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708239896-G3CQYYJYIKW2AIH4AQWI/Thorson-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708241379-WOQZWQZCL24LMNX4F08S/Thorson-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708246094-GY1M7HTXKJLIW64ZT2VZ/Thorson-9.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708247823-WG3PYNJS72UFQVABP960/Thorson-3.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708239896-G3CQYYJYIKW2AIH4AQWI/Thorson-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708241379-WOQZWQZCL24LMNX4F08S/Thorson-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708246094-GY1M7HTXKJLIW64ZT2VZ/Thorson-9.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708247823-WG3PYNJS72UFQVABP960/Thorson-3.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708255157-9EVDH3UFX9QUFL8Y1PWJ/Thorson-7.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708258593-ZHPJ7QQUFT1D7D1XD75T/Thorson-6.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708264077-86MSO0M4DNT82GT6UPVH/Thorson-5.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708266562-WC962IDVE7CPEV7ED1OK/Thorson-12.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708269456-JZ2HRSVADMBUQXI0AIHZ/Thorson-8.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708273334-O7N9AQRMJUZ64S32IJKS/Thorson-2.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708276228-VQON1VRFYB72OYJEZL8C/Thorson-10.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1429708280277-TR0Z8AVI134AKMJU4LSS/Thorson-4.jpg",
    ],
  },
  {
    title: "Amazing Vanishing Edge",
    description: "A spectacular vanishing edge pool that creates the illusion of water extending to infinity. Modern design with stunning visual impact.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751745221-IJWXZQCCNY86OYVN32BZ/IMG_0664.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751843274-TBA9FL92KOR2G7W7LKN3/IMG_0614.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751830910-7N43I5CG3FFD8ZA6KDPA/IMG_0617.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751862389-8QTLGMTMFNUYSW208W4B/IMG_0618.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751745221-IJWXZQCCNY86OYVN32BZ/IMG_0664.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751843274-TBA9FL92KOR2G7W7LKN3/IMG_0614.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751830910-7N43I5CG3FFD8ZA6KDPA/IMG_0617.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751862389-8QTLGMTMFNUYSW208W4B/IMG_0618.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751882433-YIKP8S7AREXXA1PGMH1K/IMG_0638.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751908173-FSF3LVUMA8INZ4536QYB/IMG_0640.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751920610-C7I1IHMH8SNY7M4P6ZPT/IMG_0652.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751946398-ZY50WGZ5NO1XHJ1ZTMGR/IMG_0655.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751958432-XZS5N6NP5WATRIU1YI1K/IMG_0663.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1531751839493-3IX4QGCUBOKJ6ESDD1YU/IMG_0665.jpg",
    ],
  },
  {
    title: "Elegant",
    description: "Timeless elegance meets modern convenience. This sophisticated pool design features clean lines and tasteful finishes.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237189856-MZOZXG369HJFGRLPXSTT/Jarmon-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237193080-5DL6G0FYDOUXGXH2Q4QB/Jarmon-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237206915-09UIVGEZAOUY426HQJFZ/Jarmon-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237207459-R9M37GOL6Z5K35M0G7C1/Jarmon-04.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237189856-MZOZXG369HJFGRLPXSTT/Jarmon-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237193080-5DL6G0FYDOUXGXH2Q4QB/Jarmon-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237206915-09UIVGEZAOUY426HQJFZ/Jarmon-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237207459-R9M37GOL6Z5K35M0G7C1/Jarmon-04.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237222517-8C8S9MDD13BZWGPYAN7E/Jarmon-05.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237222143-V7WZ1OWTXKKCUR3TP751/Jarmon-06.jpg",
    ],
  },
  {
    title: "Tasteful Stone",
    description: "Natural stone accents create a rustic yet refined atmosphere. This pool seamlessly blends with its natural surroundings.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237555504-FAR3C5AEPNQMF8ZZ5IWS/Spink-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237561852-TV8O90RT39UNCYDL26VZ/Spink-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237597466-SNYGH1UNPBSBQMHEQNO6/Spink-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237601270-NJBJ048G53IQL742SEA5/Spink-04.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237555504-FAR3C5AEPNQMF8ZZ5IWS/Spink-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237561852-TV8O90RT39UNCYDL26VZ/Spink-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237597466-SNYGH1UNPBSBQMHEQNO6/Spink-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237601270-NJBJ048G53IQL742SEA5/Spink-04.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1538237621417-6LS5LZOVDH4Y8M9L2QEW/Spink-05.jpg",
    ],
  },
  {
    title: "Lazy River with Construction Photos",
    description: "An incredible lazy river installation from start to finish. This extensive gallery documents every phase of construction, showing the complexity and craftsmanship involved in creating this resort-style feature.",
    previewImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714066121-HUYZ4I9OCRJGNFD9PK3R/LazyRiv-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714441494-97KE2FJ9VU6AVNCI4XIF/LazyRiv-53.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714074813-Z789CPK6PJ0OX7D9V94F/LazyRiv-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714110114-RY0FUXUHQZY7L59GI6JU/LazyRiv-10.jpg",
    ],
    allImages: [
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714066121-HUYZ4I9OCRJGNFD9PK3R/LazyRiv-01.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714066750-GQX1U4HOFEEA2OA510ZX/LazyRiv-02.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714074813-Z789CPK6PJ0OX7D9V94F/LazyRiv-03.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714075203-1CKZ95T7WMWVZ834B3VL/LazyRiv-04.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714084344-CF8LKU5INGPA4YROGDGS/LazyRiv-05.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714085182-RIR7MUHH4MRMD8I9KX4I/LazyRiv-06.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714090776-0X22OBWE0HZEBT2FCLNG/LazyRiv-07.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714101184-6CT9FHQX5LI9Z3QZ5MOC/LazyRiv-08.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714104275-MEQT5CRNAY6OBFI9I5RL/LazyRiv-09.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714110114-RY0FUXUHQZY7L59GI6JU/LazyRiv-10.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714116667-5XU2J3HLPRKHMPHXPTSC/LazyRiv-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714120118-OLLLKXK1UQ9JI5D5HCOX/LazyRiv-12.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714126810-NNF92PB5PV4QN6SKOIBN/LazyRiv-13.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714131216-S3PKL2YUSAB47SEGW9AI/LazyRiv-14.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714137210-LU2IPIXWQ5OELI1GQ55Q/LazyRiv-15.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714142261-OC16JSPAS0AJ3AA3MNRO/LazyRiv-16.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714148026-4V3M41WQONS4BM67KL1E/LazyRiv-17.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714151195-XTDEH2T5EB96MDUD6DWQ/LazyRiv-18.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714156567-K17OFJY9FUL1JNNGDXS7/LazyRiv-19.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714160183-ZFY7QR71XO624RJ6F13G/LazyRiv-20.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714166274-ESMP6A0FILAVXNUPV4LL/LazyRiv-21.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714171036-O37BURN3G215V85DWP1G/LazyRiv-22.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714176585-I5AUPBBPXHWTHPNWY84Z/LazyRiv-23.jpg",
      "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1663714441494-97KE2FJ9VU6AVNCI4XIF/LazyRiv-53.jpg",
    ],
  },
];

const galleryImages = [
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417702890243-QSQDS1WD265UOOYP0WCT/Casas-2_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703122781-D6E8L8I0Z5UFSR05EIAJ/Moss%252520Hawarden-2_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650565738114-1ZZZ42ZFUWMKODKRQ6Y9/Gallery-4.21.22-21.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703135193-U1V9OGHVA4DJ733JJ73L/Pool%252520Only-6_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703128522-8U6FIBPO53SA2BMZF1OC/Peb%252520Tec%252520Black%252520Pearl_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703159919-WHOHSSJS98UVKNCWT9GT/Wilson%252520Spa%252520Only-02_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703104838-745FEP735W8GSNZVXRBN/Dikinson-3_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703138481-TKUGAOSSZXHG67O9R5EM/Rimmer-19_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703093444-4OVXPBCGS5E7IVLOLDGM/Casas-47_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703112577-BZDZRDTQUMXAQ4VRXFPR/Eyler-14_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703124766-BPA4P7GYNZHYU70KDNBY/Nicholson-1_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703157578-BSERY7VT8H77TZPUOB00/Tietz-6_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703149414-BT77OTRSCR67E037NDZG/Soholt-10_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703083405-BL2XIV0892KTDO7J5NT3/Boone-13_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703113152-1T39CPDD50RCMJXZ4NS3/Duro-13_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703089608-GFZRSE7H5KOYEA8FV0YZ/Casas-39_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703117275-1M1GKAQUA6PEFTIAZEHZ/Howard-2_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703119081-Q7OCA9TVPPLZZOF5NOF7/Koontz-4_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703117942-AC662KNHDS0857FAQMIN/Kira-11_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650565731073-A4SXFGYQG1ATSTMLEHYA/Gallery-4.21.22-04.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703102358-8VWKZZGVEFY4KWSLJFH1/Dikinson-2_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1650565737061-Y07X8HQ39HBYR7JYMRBZ/Gallery-4.21.22-18.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703097823-KKIODI1H3U11FGA5UMOS/Clemens-18_2.jpg",
  "https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417703138787-E9J9AFGS3PZ6PQ11CGME/Real%252520Rock-5_2.jpg",
];

export default function Gallery() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentReel, setCurrentReel] = useState(0);

  const reels = [
    'https://www.instagram.com/reel/C-achO3JH1T/embed',
    'https://www.instagram.com/reel/C8HktlWJ8A3/embed',
    'https://www.instagram.com/reel/C8p922oSHoQ/embed',
    'https://www.instagram.com/reel/CrR3C77Jl0J/embed',
    'https://www.instagram.com/reel/CrgXC7SAqk4/embed',
    'https://www.instagram.com/reel/DKNez0BBQqm/embed',
    'https://www.instagram.com/reel/DP1jMqBkU1E/embed',
    'https://www.instagram.com/reel/DP4PKYBESPA/embed',
    'https://www.instagram.com/reel/DPmGVoikVqQ/embed',
    'https://www.instagram.com/reel/DQFCkvSkeeu/embed',
    'https://www.instagram.com/reel/DQHdlMDD94n/embed',
    'https://www.instagram.com/reel/DQNIEF5EiJC/embed',
    'https://www.instagram.com/reel/DQUrOFjEqLP/embed',
    'https://www.instagram.com/reel/DQXz6RugQRx/embed',
  ];

  const reelsPerView = 4;
  const maxScroll = reels.length - reelsPerView;

  const nextReel = () => {
    setCurrentReel((prev) => Math.min(prev + 1, maxScroll));
  };

  const prevReel = () => {
    setCurrentReel((prev) => Math.max(prev - 1, 0));
  };

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [lightboxImage]);

  return (
    <div>
      <PageHeader
        title="Pool Gallery"
        description="Explore our collection of beautiful custom swimming pools designed and built by Bogner Pools. Each pool is a unique creation tailored to our clients' needs and vision."
        variant="blue"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/547a42b2e4b0680f8d699c66/1417702890243-QSQDS1WD265UOOYP0WCT/Casas-2_2.jpg"
      />

      {/* Instagram Reels Carousel */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-12 mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Watch on Instagram</h2>
            <p className="text-gray-600 text-sm">
              See our latest pool construction projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative px-12">
              {/* Scrollable Container */}
              <div className="overflow-hidden">
                <div
                  className="flex gap-3 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentReel * (100 / reelsPerView + 0.75)}%)`
                  }}
                >
                  {reels.map((reelUrl, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-1/4"
                      style={{ minWidth: 'calc(25% - 9px)' }}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200" style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                        <iframe
                          src={reelUrl}
                          width="100%"
                          height="550"
                          frameBorder="0"
                          scrolling="no"
                          allowTransparency={true}
                          className="w-full"
                          style={{ position: 'absolute', top: '-60px' }}
                          title={`Instagram reel ${index + 1}`}
                          aria-label={`Instagram reel showcasing Bogner Pools project ${index + 1}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevReel}
                disabled={currentReel === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextReel}
                disabled={currentReel >= maxScroll}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next reel"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Follow CTA */}
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/bognerpools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow @bognerpools
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Construction Projects</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm">
          Follow the complete journey from excavation to completion. Click any project to view the full gallery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {featuredProjects.map((project, projectIndex) => (
            <div key={projectIndex} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
              {/* Card with Featured Image */}
              <div
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setExpandedProject(expandedProject === projectIndex ? null : projectIndex)}
              >
                {/* Featured Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      project.title === "Pool With a View"
                        ? project.allImages[4]
                        : project.title === "Lazy River with Construction Photos"
                        ? project.allImages[project.allImages.length - 1]
                        : project.previewImages[0]
                    }
                    alt={`${project.title} featured image`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Content */}
                <div className="p-3">
                  <h3 className="text-base font-bold text-blue-600 mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{project.allImages.length} photos</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">
                      {expandedProject === projectIndex ? 'Click to collapse' : 'Click to view gallery'}
                    </span>
                    <svg
                      className={`w-4 h-4 text-gray-400 transform transition-transform ${expandedProject === projectIndex ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Gallery */}
              {expandedProject === projectIndex && (
                <div className="border-t border-gray-200 p-3 bg-gray-50">
                  <p className="text-gray-700 mb-3 text-xs">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.allImages.map((imageUrl, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-square overflow-hidden rounded shadow-sm cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxImage(imageUrl);
                        }}
                      >
                        <Image
                          src={imageUrl}
                          alt={`${project.title} photo ${imgIndex + 1}`}
                          fill
                          sizes="150px"
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-4">More From Our Portfolio</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Additional highlights from pools we've built across the Inland Empire.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imageUrl, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setLightboxImage(imageUrl)}
            >
              <Image
                src={imageUrl}
                alt={`Pool design ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Inspired by What You See?</h2>
          <p className="text-xl mb-2">
            Let&apos;s bring your dream pool to life!
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Use our online form to schedule a free in-home consultation, and we&apos;ll discuss your vision, assess your property, and provide a detailed bid.
          </p>
          <div className="space-y-4">
            <a
              href="/schedule-a-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-block shadow-xl text-lg"
            >
              Schedule In-Home Consultation
            </a>
            <p className="text-sm text-blue-100">
              Want to see display pools and materials in person?<br />
              <a href="tel:9516885543" className="text-white underline hover:text-blue-200 font-semibold">Call (951) 688-5543</a> to schedule a showroom visit
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition z-10"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={lightboxImage}
              alt="Full size pool photo"
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
              quality={100}
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 text-white text-sm text-center">
            Click outside image or press ESC to close
          </div>
        </div>
      )}
    </div>
  );
}
