

export default function NewCountry({ params }: { params: { input: string } }) {
    let countryInput = params.input.toLowerCase();

    const countries: {
        name: string,
        capital: string,
        population: string,
    }[] = [
            {
                name: "Iran",
                capital: "Tehran",
                population: "85 million"
            },
            {
                name: "Turkey",
                capital: "Ankara",
                population: "85 million"
            },
            {
                name: "Russia",
                capital: "Moscow",
                population: "146 million"
            },
            {
                name: "Palestine",
                capital: "East Jerusalem",
                population: "5.5 million"
            },
            {
                name: "China",
                capital: "Beijing",
                population: "1,410 million"
            }
        ]

    function findCountry(country_url: string) {
        return countries.find(countries => countries.name.toLowerCase() == country_url.toLowerCase())
    }
    let result = findCountry(countryInput);

    
    return (
        <div>
            {
            result ?
            (
            <div id="main" className="pt-20 flex justify-center items-center">
                <div className="h-60 w-80 mt-40 bg-gray-200 rounded-2xl text-black flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start text-2xl space-y-2">
                        <h1>Country Name: {result.name}</h1>
                        <h1>Capital: {result.capital}</h1>
                        <h1>Population: {result.population}</h1>
                    </div>
                </div>
            </div>
            ) :
            (
                <div id="main" className="pt-20 flex justify-center items-center">
                <div className="h-60 w-80 mt-40 bg-gray-200 rounded-2xl text-black flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-start text-2xl space-y-2">
                        <h1>Country not found!</h1>
                    </div>
                </div>
            </div>
            )
        }
        </div>
    )
}
