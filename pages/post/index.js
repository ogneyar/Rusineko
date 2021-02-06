import MainLayout from "../../components/mainLayout";
import Link from 'next/link'

export default function Post() {
    return (
        <MainLayout>
            
            <h1>Post Page</h1>

            <style jsx>{`
            h1 {
                color: lightgreen;
            }
            `}</style>
                        
        </MainLayout>
    )
}