import HomePage from './HomePage.jsx'

function ServicesPage({ language, villages, selectedVillage, onVillageChange }) {
  return (
    <HomePage
      language={language}
      villages={villages}
      selectedVillage={selectedVillage}
      onVillageChange={onVillageChange}
      showHero={false}
    />
  )
}

export default ServicesPage
