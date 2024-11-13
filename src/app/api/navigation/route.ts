export async function GET() {
    try {
        const res = await fetch(process.env.API + '/data', {
            headers: {
              'Content-Type': 'application/json',
            },
        })

        if (res.ok) {
            const data = await res.json()

            if (data?.navItems) {
                return Response.json({ status: 200, body: {navigation: [...data.navItems]}});
            } else {
                return Response.error();
            }
        }
    } catch (e) {
        return Response.error();
    }
  }