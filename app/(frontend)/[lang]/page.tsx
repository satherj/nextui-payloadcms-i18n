import { getDictionary } from '../dictionaries'
import { Locale } from '../dictionaries'

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{dict.common.welcome}</h1>
      <nav className="space-x-4">
        <a href={`/${lang}`} className="text-blue-500 hover:text-blue-700">
          {dict.navigation.home}
        </a>
        <a href={`/${lang}/about`} className="text-blue-500 hover:text-blue-700">
          {dict.navigation.about}
        </a>
        <a href={`/${lang}/contact`} className="text-blue-500 hover:text-blue-700">
          {dict.navigation.contact}
        </a>
      </nav>
    </div>
  )
}
