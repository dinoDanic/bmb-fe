import React from 'react'
import { BsBox, BsBuilding, BsHouse, BsInboxes } from 'react-icons/bs'
import { GiTakeMyMoney } from 'react-icons/gi'

export const HomeIcon = () => {
  return <BsHouse size={36} />
}

export const InboxesIcon = () => {
  return <BsInboxes size={36} />
}

export const BoxIcon = () => {
  return <BsBox size={36} />
}

export const BuildingIcon = () => {
  return <BsBuilding size={36} />
}

export const MoneyIcon = () => {
  return <GiTakeMyMoney size={36} />
}
