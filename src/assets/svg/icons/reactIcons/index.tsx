import React from 'react'
import {
  BsBox,
  BsBuilding,
  BsHouse,
  BsInboxes,
  BsShopWindow,
} from 'react-icons/bs'
import { VscTools } from 'react-icons/vsc'
import { GiTakeMyMoney } from 'react-icons/gi'

const SIZE = 30

export const HomeIcon = () => {
  return <BsHouse size={SIZE} />
}

export const InboxesIcon = () => {
  return <BsInboxes size={SIZE} />
}

export const BoxIcon = () => {
  return <BsBox size={SIZE} />
}

export const BuildingIcon = () => {
  return <BsBuilding size={SIZE} />
}

export const MoneyIcon = () => {
  return <BsShopWindow size={SIZE} />
}

export const SettingsIcon = () => {
  return <VscTools size={SIZE} />
}
