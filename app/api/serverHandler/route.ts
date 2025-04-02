"use server"
export async function GET() {
    try{
        const rawData = await fetch('https://api.iconfinder.com/v4/iconsets?count=10', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.ICON_API_KEY}`,
                "accept": "application/json"
            },
        });

        if (!rawData.ok){
            throw new Error(`API request failed: ${rawData.status}`);
        }

        const data = await rawData.json();
        console.log("Full API response:", data)

        return new Response (JSON.stringify(data.iconsets), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error: unknown) {
        let errorMessage = "Unknown error occurred";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.error("API Fetch Error:", errorMessage);
        return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
    }
}
