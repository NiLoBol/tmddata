
import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     const apiRes = await fetch('https://api.adviceslip.com/advice');
//     if(apiRes.ok){
//         const data =await apiRes.json
//         return NextResponse.json(data, {
//             status: 200,
//           });
//     }
    
//     return NextResponse.json("api working", {
//       status: 200,
//     });
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//     return NextResponse.json({ error: 'Failed to fetch data tmd' }, { status: 500 });
//   }
// }


export async function GET() {
  try {
    // Simulate fetching data (replace this with real API call)
    const data = {
      message: 'Data fetched successfully',
      // Add any other data you want
    };

    // Return the data as a JSON response
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error in getdata API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

