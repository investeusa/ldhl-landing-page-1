import { NextResponse } from 'next/server'
import countries from './app/lib/countries.json'

// run only on homepage
export const config = {
    matcher: '/',
}

export async function middleware(req) {
    const { nextUrl: url, geo } = req
    const country = geo.country || 'BR'
    const city = geo.city || 'São Paulo'
    const region = geo.region || 'SP'

    const countryInfo = countries.find((x) => x.cca2 === country)

    const currencyCode = Object.keys(countryInfo.currencies)[0]
    const currency = countryInfo.currencies[currencyCode]
    const languages = Object.values(countryInfo.languages).join(', ')

    url.searchParams.set('country', country)
    url.searchParams.set('city', city)
    url.searchParams.set('region', region)
    url.searchParams.set('currencyCode', currencyCode)
    url.searchParams.set('currencySymbol', currency.symbol)
    url.searchParams.set('name', currency.name)
    url.searchParams.set('languages', languages)

    return NextResponse.rewrite(url)
}
