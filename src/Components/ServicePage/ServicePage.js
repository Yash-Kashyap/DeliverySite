import React from 'react';
import Header from '../Header';
import Area from './Area';
import Choose from './Choose';
import Middle from './Middle';
import MyPage from './MyPage';
import FAQ from '../HomePage/FAQ';

function ServicePage() {
    return (
        <div className='overflow-x-hidden relative bg-indigo-100 bg-opacity-40'>

            <div className=''>
                <Header />
            </div>

            <MyPage />

            <Middle heading='Two Wheelers from Porter' source='https://dailytimes.com.pk/assets/uploads/2022/10/25/Stock-delivery-bikes-food-Dubai_17767fc03a6_large-1280x720.jpg' weight="20kg" cost="₹38" description="Base fare is inclusive of 1.0 km distance & 25 minutes of order
            time. Pricing may vary basis locality. Please note, road tax,
            parking fee, etc, will be applicable over and above ride fare."/>

            <Middle heading='Truck Service from Porter' source='https://static.vecteezy.com/system/resources/previews/010/916/350/original/3d-mobile-phone-delivery-truck-online-shopping-fast-delivery-service-png.png' weight="69kg" cost="₹180" description="Base fare is inclusive of 5.0 km distance & 45 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare." />
            
            <Area />

            <Choose />

            <FAQ />

            <div className='h-[100px]'></div>

        </div>
    )
}

export default ServicePage