import fs from 'fs';

export async function fetch_data() {
    const filePath = 'public/copy_ciweimao.txt';

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    return fileContent;
}

export default async function Page() {
    const content = await fetch_data();
    return (
        <pre>
            {content}
        </pre>
    )
}