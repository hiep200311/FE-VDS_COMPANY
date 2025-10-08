import { createBrowserRouter } from 'react-router';
import RootLayout from '@/apps/layouts/RootLayout';
import Home from '@/apps/pages';
import KiemKeKhiNhaKinh from '@/apps/pages/tu-van/kiem-ke-khi-nha-kinh';
import DaoTaoChuyenDoiSo from '@/apps/pages/dao-tao/chuyen-doi-so';
import GioiThieu from '@/apps/pages/gioithieu/gioi-thieu.tsx';
import NotFound from '@/apps/pages/NotFound';
import SuKien from "@/apps/pages/tin-tuc/su-kien.tsx";
import ChuyenGia from '@/apps/pages/chuyen-gia';
import ChuyenGiaSingle from '@/apps/pages/chuyen-gia/chuyen-gia-single';
import TruyXuatNguonGoc from "@/apps/pages/tu-van/truy-xuat-nguon-goc.tsx";
import POS from "@/apps/pages/tu-van/pos.tsx";
import TinChiCarbon from '@/apps/pages/tu-van/tin-chi-carbon';
import HosoNangLucPage from '@/apps/pages/gioithieu/hosonangluc.tsx';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '', element: <Home /> },
            { path: 'gioi-thieu', element: <GioiThieu />},
            { path: 'ho-so-nang-luc', element: <HosoNangLucPage />},
            { path: 'tu-van', children: [
                { path: 'kiem-ke-khi-nha-kinh', element: <KiemKeKhiNhaKinh /> },
                { path: 'truy-xuat-nguon-goc', element: <TruyXuatNguonGoc /> },
                { path: 'tin-chi-carbon', element: <TinChiCarbon /> },
                { path: 'pos', element: <POS /> }
            ]},
            { path: 'dao-tao', children: [
                { path: 'chuyen-doi-so', element: <DaoTaoChuyenDoiSo /> }
            ]},
            { path: 'tin-tuc', children: [
                { path: 'su-kien', element: <SuKien /> }
            ]},
            { path: 'chuyen-gia', element: <ChuyenGia></ChuyenGia> },
            { path: 'chuyen-gia/:id', element: <ChuyenGiaSingle /> },
            { path: '*', element: <NotFound /> },
        ]
    }
]);

