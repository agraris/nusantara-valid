/**
 * Nusantara Valid: province.extended.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
**/

import { PROVINCE_DATA } from '../province';
import { MergeRecursive } from '../../helpers/index.extended';

/**
 * PROVINCE_EXTENDED_DATA
 *
 * List of extended province data of Indonesia like regencies and districts
**/
export const PROVINCE_DATA_EXTENSION =
{
    AC: {
        regencies: [
            {
                name: 'Aceh Selatan',
                bpsCode: '11.01',
                districts: [
                    { name: 'Bakongan', bpsCode: '11.01.01' },
                    { name: 'Kluet Utara', bpsCode: '11.01.02' },
                    { name: 'Kluet Selatan', bpsCode: '11.01.03' },
                    { name: 'Labuhan Haji', bpsCode: '11.01.04' },
                    { name: 'Meukek', bpsCode: '11.01.05' },
                    { name: 'Samadua', bpsCode: '11.01.06' },
                    { name: 'Sawang', bpsCode: '11.01.07' },
                    { name: 'Tapaktuan', bpsCode: '11.01.08' },
                    { name: 'Trumon', bpsCode: '11.01.09' },
                    { name: 'Pasi Raja', bpsCode: '11.01.10' },
                    { name: 'Labuhan Haji Timur', bpsCode: '11.01.11' },
                    { name: 'Labuhan Haji Barat', bpsCode: '11.01.12' },
                    { name: 'Kluet Tengah', bpsCode: '11.01.13' },
                    { name: 'Kluet Timur', bpsCode: '11.01.14' },
                    { name: 'Bakongan Timur', bpsCode: '11.01.15' },
                    { name: 'Trumon Timur', bpsCode: '11.01.16' },
                    { name: 'Kota Bahagia', bpsCode: '11.01.17' },
                    { name: 'Trumon Tengah', bpsCode: '11.01.18' }
                ]
            }, {
                name: 'Aceh Tenggara',
                bpsCode: '11.02',
                districts: [
                    { name: 'Lawe Alas', bpsCode: '11.02.01' },
                    { name: 'Lawe Sigala Gala', bpsCode: '11.02.02' },
                    { name: 'Bambel', bpsCode: '11.02.03' },
                    { name: 'Babussalam', bpsCode: '11.02.04' },
                    { name: 'Badar', bpsCode: '11.02.05' },
                    { name: 'Babul Makmur', bpsCode: '11.02.06' },
                    { name: 'Darul Hasanah', bpsCode: '11.02.07' },
                    { name: 'Lawe Bulan', bpsCode: '11.02.08' },
                    { name: 'Bukit Tusam', bpsCode: '11.02.09' },
                    { name: 'Semadam', bpsCode: '11.02.10' },
                    { name: 'Babul Rahmah', bpsCode: '11.02.11' },
                    { name: 'Ketambe', bpsCode: '11.02.12' },
                    { name: 'Deleng Pokhkisen', bpsCode: '11.02.13' },
                    { name: 'Lawe Sumur', bpsCode: '11.02.14' },
                    { name: 'Tanoh Alas', bpsCode: '11.02.15' },
                    { name: 'Leuser', bpsCode: '11.02.16' }
                ]
            }, {
                name: 'Aceh Timur',
                bpsCode: '11.03',
                districts: [
                    { name: 'Darul Aman', bpsCode: '11.03.01' },
                    { name: 'Julok', bpsCode: '11.03.02' },
                    { name: 'Idi Rayeuk', bpsCode: '11.03.03' },
                    { name: 'Birem Bayeun', bpsCode: '11.03.04' },
                    { name: 'Serbajadi', bpsCode: '11.03.05' },
                    { name: 'Nurussalam', bpsCode: '11.03.06' },
                    { name: 'Peureulak', bpsCode: '11.03.07' },
                    { name: 'Rantau Selamat', bpsCode: '11.03.08' },
                    { name: 'Simpang Ulim', bpsCode: '11.03.09' },
                    { name: 'Rantau Peureulak', bpsCode: '11.03.10' },
                    { name: 'Pante Bidari', bpsCode: '11.03.11' },
                    { name: 'Madat', bpsCode: '11.03.12' },
                    { name: 'Indra Makmu', bpsCode: '11.03.13' },
                    { name: 'Idi Tunong', bpsCode: '11.03.14' },
                    { name: 'Banda Alam', bpsCode: '11.03.15' },
                    { name: 'Peudawa', bpsCode: '11.03.16' },
                    { name: 'Peureulak Timur', bpsCode: '11.03.17' },
                    { name: 'Peureulak Barat', bpsCode: '11.03.18' },
                    { name: 'Sungai Raya', bpsCode: '11.03.19' },
                    { name: 'Simpang Jernih', bpsCode: '11.03.20' },
                    { name: 'Darul Iksan', bpsCode: '11.03.21' },
                    { name: 'Darul Falah', bpsCode: '11.03.22' },
                    { name: 'Idi Timur', bpsCode: '11.03.23' },
                    { name: 'Peunaron', bpsCode: '11.03.24' }
                ]
            }, {
                name: 'Aceh Tengah',
                bpsCode: '11.04',
                districts: [
                    { name: 'Linge', bpsCode: '11.04.01' },
                    { name: 'Silih Nara', bpsCode: '11.04.02' },
                    { name: 'Bebesen', bpsCode: '11.04.03' },
                    { name: 'Pegasing', bpsCode: '11.04.07' },
                    { name: 'Bintang', bpsCode: '11.04.08' },
                    { name: 'Ketol', bpsCode: '11.04.10' },
                    { name: 'Kebayakan', bpsCode: '11.04.11' },
                    { name: 'Kute Panang', bpsCode: '11.04.12' },
                    { name: 'Celala', bpsCode: '11.04.13' },
                    { name: 'Laut Tawar', bpsCode: '11.04.17' },
                    { name: 'Atu Lintang', bpsCode: '11.04.18' },
                    { name: 'Jagong Jeget', bpsCode: '11.04.19' },
                    { name: 'Bies', bpsCode: '11.04.20' },
                    { name: 'Rusip Antara', bpsCode: '11.04.21' }
                ]
            }, {
                name: 'Aceh Barat',
                bpsCode: '11.05',
                districts: [
                    { name: 'Johan Pahwalan', bpsCode: '11.05.01' },
                    { name: 'Kaway XVI', bpsCode: '11.05.02' },
                    { name: 'Sungai Mas', bpsCode: '11.05.03' },
                    { name: 'Woyla', bpsCode: '11.05.04' },
                    { name: 'Samatiga', bpsCode: '11.05.05' },
                    { name: 'Bubon', bpsCode: '11.05.06' },
                    { name: 'Arongan Lambalek', bpsCode: '11.05.07' },
                    { name: 'Pante Ceureumen', bpsCode: '11.05.08' },
                    { name: 'Meureubo', bpsCode: '11.05.09' },
                    { name: 'Moyla Barat', bpsCode: '11.05.10' },
                    { name: 'Woyla Timur', bpsCode: '11.05.11' },
                    { name: 'Panton Reu', bpsCode: '11.05.12' }
                ]
            }, {
                name: 'Aceh Besar',
                bpsCode: '11.06',
                districts: [
                    { name: 'Lhoong', bpsCode: '11.06.01' },
                    { name: 'Lhoknga', bpsCode: '11.06.02' },
                    { name: 'Indrapuri', bpsCode: '11.06.03' },
                    { name: 'Seulimeum', bpsCode: '11.06.04' },
                    { name: 'Mantasiek', bpsCode: '11.06.05' },
                    { name: 'Sukamakmur', bpsCode: '11.06.06' },
                    { name: 'Darul Imarah', bpsCode: '11.06.07' },
                    { name: 'Peukan Bada', bpsCode: '11.06.08' },
                    { name: 'Mesjid Raya', bpsCode: '11.06.09' },
                    { name: 'Ingin Jaya', bpsCode: '11.06.10' },
                    { name: 'Kuta Baro', bpsCode: '11.06.11' },
                    { name: 'Darussalam', bpsCode: '11.06.12' },
                    { name: 'Pulo Aceh', bpsCode: '11.06.13' },
                    { name: 'Lembah Seulawah', bpsCode: '11.06.14' },
                    { name: 'Kota Jantho', bpsCode: '11.06.15' },
                    { name: 'Kota Cot Glie', bpsCode: '11.06.16' },
                    { name: 'Kota Malaka', bpsCode: '11.06.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.06.18' },
                    { name: 'Darul Kamal', bpsCode: '11.06.19' },
                    { name: 'Baitussalam', bpsCode: '11.06.20' },
                    { name: 'Krueng Barona Jaya', bpsCode: '11.06.21' },
                    { name: 'Keupung', bpsCode: '11.06.22' },
                    { name: 'Blang Bintang', bpsCode: '11.06.23' }
                ]
            }, {
                name: 'Pidie',
                bpsCode: '11.07',
                districts: [
                    { name: 'Batee', bpsCode: '11.07.03' },
                    { name: 'Delima', bpsCode: '11.07.04' },
                    { name: 'Geumpang', bpsCode: '11.07.05' },
                    { name: 'Geulumpang Tiga', bpsCode: '11.07.06' },
                    { name: 'Indra Jaya', bpsCode: '11.07.07' },
                    { name: 'Kembang Tanjong', bpsCode: '11.07.08' },
                    { name: 'Kota Sigli', bpsCode: '11.07.09' },
                    { name: 'Mila', bpsCode: '11.07.11' },
                    { name: 'Muara Tiga', bpsCode: '11.07.12' },
                    { name: 'Mutiara', bpsCode: '11.07.13' },
                    { name: 'Padang Tiji', bpsCode: '11.07.14' },
                    { name: 'Peukan Baro', bpsCode: '11.07.15' },
                    { name: 'Pide', bpsCode: '11.07.16' },
                    { name: 'Sakti', bpsCode: '11.07.17' },
                    { name: 'Simpang Tiga', bpsCode: '11.07.18' },
                    { name: 'Tangse', bpsCode: '11.07.19' },
                    { name: 'Tiro/Truseb', bpsCode: '11.07.21' },
                    { name: 'Keumala', bpsCode: '11.07.22' },
                    { name: 'Mutiara Timur', bpsCode: '11.07.24' },
                    { name: 'Grong Grong', bpsCode: '11.07.25' },
                    { name: 'Mane', bpsCode: '11.07.27' },
                    { name: 'Glumpang Baro', bpsCode: '11.07.29' },
                    { name: 'Titeue', bpsCode: '11.07.31' },
                ]
            }, {
                name: 'Aceh Utara',
                bpsCode: '11.08',
                districts: [
                    { name: 'Baktiya', bpsCode: '11.08.01' },
                    { name: 'Dewantara', bpsCode: '11.08.02' },
                    { name: 'Kuta Makmur', bpsCode: '11.08.03' },
                    { name: 'Lhoksukon', bpsCode: '11.08.04' },
                    { name: 'Matangkuli', bpsCode: '11.08.05' },
                    { name: 'Muara Batu', bpsCode: '11.08.06' },
                    { name: 'Meurah Mulia', bpsCode: '11.08.07' },
                    { name: 'Samudera', bpsCode: '11.08.08' },
                    { name: 'Seunuddon (Seunudon)', bpsCode: '11.08.09' },
                    { name: 'Syamtalira Aron', bpsCode: '11.08.10' },
                    { name: 'Syamtalira Bayu', bpsCode: '11.08.11' },
                    { name: 'Tanah Luas', bpsCode: '11.08.12' },
                    { name: 'Tanah Pasir', bpsCode: '11.08.13' },
                    { name: 'Tanah Jambo Aye', bpsCode: '11.08.14' },
                    { name: 'Sawang', bpsCode: '11.08.15' },
                    { name: 'Nisam', bpsCode: '11.08.16' },
                    { name: 'Cot Girek', bpsCode: '11.08.17' },
                    { name: 'Langkahan', bpsCode: '11.08.18' },
                    { name: 'Baktiya Barat', bpsCode: '11.08.19' },
                    { name: 'Paya Bakong', bpsCode: '11.08.20' },
                    { name: 'Nibong', bpsCode: '11.08.21' },
                    { name: 'Simpang Kramat (Keramat)', bpsCode: '11.08.22' },
                    { name: 'Lapang', bpsCode: '11.08.23' },
                    { name: 'Pirak Timur', bpsCode: '11.08.24' },
                    { name: 'Geuredong Pase', bpsCode: '11.08.25' },
                    { name: 'Banda Baro', bpsCode: '11.08.26' },
                    { name: 'Nisam Antara', bpsCode: '11.08.27' }
                ]
            }, {
                name: 'Simeulue',
                bpsCode: '11.09',
                districts: [
                    { name: 'Alapan (Alafan)', bpsCode: '11.09.08' },
                    { name: 'Salang', bpsCode: '11.09.02' },
                    { name: 'Simeulue Barat (Simeuleu Barat)', bpsCode: '11.09.06' },
                    { name: 'Simeulue Cut', bpsCode: '11.09.10' },
                    { name: 'Simeulue Tengah (Simeuleu Tengah)', bpsCode: '11.09.01' },
                    { name: 'Simeulue Timur (Simeuleu Timur)', bpsCode: '11.09.04' },
                    { name: 'Teluk Dalam', bpsCode: '11.09.05' },
                    { name: 'Teupah Barat', bpsCode: '11.09.03' },
                    { name: 'Teupah Selatan', bpsCode: '11.09.07' },
                    { name: 'Teupah Tengah', bpsCode: '11.09.09' }
                ]
            }, {
                name: 'Aceh Singkil',
                bpsCode: '11.10',
                districts: [
                    { name: 'Pulau Banyak', bpsCode: '11.10.01' },
                    { name: 'Simpang Kanan', bpsCode: '11.10.02' },
                    { name: 'Singkil', bpsCode: '11.10.04' },
                    { name: 'Gunung Meriah (Mariah)', bpsCode: '11.10.06' },
                    { name: 'Kota Baharu', bpsCode: '11.10.09' },
                    { name: 'Singkil Utara', bpsCode: '11.10.10' },
                    { name: 'Danau Paris', bpsCode: '11.10.11' },
                    { name: 'Suro Makmur', bpsCode: '11.10.12' },
                    { name: 'Singkohor', bpsCode: '11.10.13' },
                    { name: 'Kuala Baru', bpsCode: '11.10.14' },
                    { name: 'Pulau Banyak Barat', bpsCode: '11.10.16' }
                ]
            }, {
                name: 'Bireuen',
                bpsCode: '11.11',
                districts: [
                    { name: 'Samalanga', bpsCode: '11.11.01' },
                    { name: 'Jeunieb', bpsCode: '11.11.02' },
                    { name: 'Peudada', bpsCode: '11.11.03' },
                    { name: 'Jeumpa', bpsCode: '11.11.04' },
                    { name: 'Peusangan', bpsCode: '11.11.05' },
                    { name: 'Makmur', bpsCode: '11.11.06' },
                    { name: 'Gandapura (Ganda Pura)', bpsCode: '11.11.07' },
                    { name: 'Pandrah', bpsCode: '11.11.08' },
                    { name: 'Juli', bpsCode: '11.11.09' },
                    { name: 'Jangka', bpsCode: '11.11.10' },
                    { name: 'Simpang Mamplam', bpsCode: '11.11.11' },
                    { name: 'Peulimbang (Plimbang)', bpsCode: '11.11.12' },
                    { name: 'Kota Juang', bpsCode: '11.11.13' },
                    { name: 'Kuala', bpsCode: '11.11.14' },
                    { name: 'Peusangan Siblah Krueng', bpsCode: '11.11.15' },
                    { name: 'Peusangan Selatan', bpsCode: '11.11.16' },
                    { name: 'Kuta Blang', bpsCode: '11.11.17' }
                ]
            }, {
                name: 'Aceh Barat Daya',
                bpsCode: '11.12',
                districts: [
                    { name: 'Blang Pidie', bpsCode: '11.12.01' },
                    { name: 'Tangan-Tangan', bpsCode: '11.12.02' },
                    { name: 'Manggeng', bpsCode: '11.12.03' },
                    { name: 'Susoh', bpsCode: '11.12.04' },
                    { name: 'Kuala Batee', bpsCode: '11.12.05' },
                    { name: 'Babah Rot', bpsCode: '11.12.06' },
                    { name: 'Setia', bpsCode: '11.12.07' },
                    { name: 'Jeumpa', bpsCode: '11.12.08' },
                    { name: 'Lembah Sabil', bpsCode: '11.12.09' }
                ]
            }, {
                name: 'Gayo Lues',
                bpsCode: '11.13',
                districts: [
                    { name: 'Blangkejeren (Blang Kejeren)', bpsCode: '11.13.01' },
                    { name: 'Kutapanjang (Kuta Panjang)', bpsCode: '11.13.02' },
                    { name: 'Rikit Gaib', bpsCode: '11.13.03' },
                    { name: 'Terangun (Terangon)', bpsCode: '11.13.04' },
                    { name: 'Pining (Pinding)', bpsCode: '11.13.05' },
                    { name: 'Blangpegayon (Blang Pegayon)', bpsCode: '11.13.06' },
                    { name: 'Puteri Betung (Putri Betung)', bpsCode: '11.13.07' },
                    { name: 'Dabun Gelang (Debun Gelang)', bpsCode: '11.13.08' },
                    { name: 'Blangjerango (Blang Jerango)', bpsCode: '11.13.09' },
                    { name: 'Teripe/Tripe Jaya', bpsCode: '11.13.10' },
                    { name: 'Pantan Cuaca', bpsCode: '11.13.11' }
                ]
            }, {
                name: 'Aceh Jaya',
                bpsCode: '11.14',
                districts: [
                    { name: 'Teunom', bpsCode: '11.14.01' },
                    { name: 'Krueng Sabee', bpsCode: '11.14.02' },
                    { name: 'Setia Bhakti (Setia Bakti)', bpsCode: '11.14.03' },
                    { name: 'Sampoiniet', bpsCode: '11.14.04' },
                    { name: 'Jaya', bpsCode: '11.14.05' },
                    { name: 'Panga (Keude Panga)', bpsCode: '11.14.06' },
                    { name: 'Indra Jaya', bpsCode: '11.14.07' },
                    { name: 'Darul Hikmah', bpsCode: '11.14.08' },
                    { name: 'Pasie Raya', bpsCode: '11.14.09' }
                ]
            }, {
                name: 'Nagan Raya',
                bpsCode: '11.15',
                districts: [
                    { name: 'Kuala', bpsCode: '11.15.01' },
                    { name: 'Seunagan', bpsCode: '11.15.02' },
                    { name: 'Seunagan Timur', bpsCode: '11.15.03' },
                    { name: 'Beutong', bpsCode: '11.15.04' },
                    { name: 'Darul Makmur', bpsCode: '11.15.05' },
                    { name: 'Suka Makmue', bpsCode: '11.15.06' },
                    { name: 'Kuala Pesisir', bpsCode: '11.15.07' },
                    { name: 'Tadu Raya', bpsCode: '11.15.08' },
                    { name: 'Tripa Makmur', bpsCode: '11.15.09' },
                    { name: 'Beutong Ateuh Banggalang', bpsCode: '11.15.10' }
                ]
            }, {
                name: 'Aceh Tamiang',
                bpsCode: '11.16',
                districts: [
                    { name: 'Manyak Payed', bpsCode: '11.16.01' },
                    { name: 'Bendahara', bpsCode: '11.16.02' },
                    { name: 'Karang Baru', bpsCode: '11.16.03' },
                    { name: 'Seruway', bpsCode: '11.16.04' },
                    { name: 'Kota Kualasinpang (Kota Kuala Simpang)', bpsCode: '11.16.05' },
                    { name: 'Kejuruan Muda', bpsCode: '11.16.06' },
                    { name: 'Tamiang Hulu', bpsCode: '11.16.07' },
                    { name: 'Rantau', bpsCode: '11.16.08' },
                    { name: 'Banda Mulia', bpsCode: '11.16.09' },
                    { name: 'Bandar Pusaka', bpsCode: '11.16.10' },
                    { name: 'Tenggulun', bpsCode: '11.16.11' },
                    { name: 'Sekerak', bpsCode: '11.16.12' }
                ]
            }, {
                name: 'Bener Meriah',
                bpsCode: '11.17',
                districts: [
                    { name: 'Pintu Rime Gayo', bpsCode: '11.17.01' },
                    { name: 'Permata', bpsCode: '11.17.02' },
                    { name: 'Syiah Utama', bpsCode: '11.17.03' },
                    { name: 'Bandar', bpsCode: '11.17.04' },
                    { name: 'Bukit', bpsCode: '11.17.05' },
                    { name: 'Wih Pesam', bpsCode: '11.17.06' },
                    { name: 'Timang Gajah', bpsCode: '11.17.07' },
                    { name: 'Bener Kelipah', bpsCode: '11.17.08' },
                    { name: 'Mesidah', bpsCode: '11.17.09' },
                    { name: 'Gajah Putih', bpsCode: '11.17.10' }
                ]
            }, {
                name: 'Pide Jaya',
                bpsCode: '11.18',
                districts: [
                    { name: 'Meureudu', bpsCode: '11.18.01' },
                    { name: 'Ulim', bpsCode: '11.18.02' },
                    { name: 'Jangka Buaya (Jangka Buya)', bpsCode: '11.18.03' },
                    { name: 'Bandar Dua', bpsCode: '11.18.04' },
                    { name: 'Meurah Dua', bpsCode: '11.18.05' },
                    { name: 'Bandar Baru', bpsCode: '11.18.06' },
                    { name: 'Panteraja', bpsCode: '11.18.07' },
                    { name: 'Trienggadeng', bpsCode: '11.18.08' }
                ]
            }, {
                name: 'Banda Aceh',
                bpsCode: '11.71',
                districts: [
                    { name: 'Baiturrahman', bpsCode: '11.71.01' },
                    { name: 'Kuta Alam', bpsCode: '11.71.02' },
                    { name: 'Meuraxa', bpsCode: '11.71.03' },
                    { name: 'Syiah Kuala', bpsCode: '11.71.04' },
                    { name: 'Lueng Bata', bpsCode: '11.71.05' },
                    { name: 'Kuta Raja', bpsCode: '11.71.06' },
                    { name: 'Banda Raya', bpsCode: '11.71.07' },
                    { name: 'Jaya Baru', bpsCode: '11.71.08' },
                    { name: 'Ulee Kareng', bpsCode: '11.71.09' }
                ]
            }, {
                name: 'Sabang',
                bpsCode: '11.72',
                districts: [
                    { name: 'Sukakarya', bpsCode: '11.72.01' },
                    { name: 'Sukajaya', bpsCode: '11.72.02' }
                ]
            }, {
                name: 'Lhokseumawe',
                bpsCode: '11.73',
                districts: [
                    { name: 'Muara Dua', bpsCode: '11.73.01' },
                    { name: 'Banda Sakti', bpsCode: '11.73.02' },
                    { name: 'Blang Mangat', bpsCode: '11.73.03' },
                    { name: 'Muara Satu', bpsCode: '11.73.04' }
                ]
            }, {
                name: 'Langsa',
                bpsCode: '11.74',
                districts: [
                    { name: 'Langsa Timur', bpsCode: '11.74.01' },
                    { name: 'Langsa Barat', bpsCode: '11.74.02' },
                    { name: 'Langsa Kota', bpsCode: '11.74.03' },
                    { name: 'Langsa Lama', bpsCode: '11.74.04' },
                    { name: 'Langsa Baro', bpsCode: '11.74.05' }
                ]
            }, {
                name: 'Subulussalam',
                bpsCode: '11.75',
                districts: [
                    { name: 'Penanggalan', bpsCode: '11.75.02' },
                    { name: 'Rundeng', bpsCode: '11.75.03' },
                    { name: 'Longkib', bpsCode: '11.75.05' }
                ]
            },
        ]
    },
    BA: {
        regencies: [
            {
                name: 'Jembrana',
                bpscode: '51.01',
                districts: [
                    { name: 'Negara', bpsCode: '51.01.01' },
                    { name: 'Mendoyo', bpsCode: '51.01.02' },
                    { name: 'Pekutatan', bpsCode: '51.01.03' },
                    { name: 'Melaya', bpsCode: '51.01.04' },
                    { name: 'Jembrana', bpsCode: '51.01.05' }
                ]
            }, {
                name: 'Tabanan',
                bpscode: '51.02',
                districts: [
                    { name: 'Selemadeg', bpsCode: '51.02.01' },
                    { name: 'Salamadeg Timur (Salemadeg Timur)', bpsCode: '51.02.02' },
                    { name: 'Salemadeg Barat', bpsCode: '51.02.03' },
                    { name: 'Kerambitan', bpsCode: '51.02.04' },
                    { name: 'Tabanan', bpsCode: '51.02.05' },
                    { name: 'Kediri', bpsCode: '51.02.06' },
                    { name: 'Marga', bpsCode: '51.02.07' },
                    { name: 'Penebel', bpsCode: '51.02.08' },
                    { name: 'Baturiti', bpsCode: '51.02.09' },
                    { name: 'Pupuan', bpsCode: '51.02.10' }
                ]
            }, {
                name: 'Badung',
                bpscode: '51.03',
                districts: [
                    { name: 'Kuta', bpsCode: '51.03.01' },
                    { name: 'Mengwi', bpsCode: '51.03.02' },
                    { name: 'Abiansemal', bpsCode: '51.03.03' },
                    { name: 'Petang', bpsCode: '51.03.04' },
                    { name: 'Kuta Selatan', bpsCode: '51.03.05' },
                    { name: 'Kuta Utara', bpsCode: '51.03.06' }
                ]
            }, {
                name: 'Gianyar',
                bpscode: '51.04',
                districts: [
                    { name: 'Sukawati', bpsCode: '51.04.01' },
                    { name: 'Belah Batuh (Blahbatuh)', bpsCode: '51.04.02' },
                    { name: 'Gianyar', bpsCode: '51.04.03' },
                    { name: 'Tampaksiring (Tampak Siring)', bpsCode: '51.04.04' },
                    { name: 'Ubud', bpsCode: '51.04.05' },
                    { name: 'Tegallalang', bpsCode: '51.04.06' },
                    { name: 'Payangan', bpsCode: '51.04.07' }
                ]
            }, {
                name: 'Klungkung',
                bpscode: '51.05',
                districts: [
                    { name: 'Nusa Penida (Nusapenida)', bpsCode: '51.05.01' },
                    { name: 'Banjarangkan', bpsCode: '51.05.02' },
                    { name: 'Klungkung', bpsCode: '51.05.03' },
                    { name: 'Dawan', bpsCode: '51.05.04' }
                ]
            }, {
                name: 'Bangli',
                bpscode: '51.06',
                districts: [
                    { name: 'Susut', bpsCode: '51.06.01' },
                    { name: 'Bangli', bpsCode: '51.06.02' },
                    { name: 'Tembuku', bpsCode: '51.06.03' },
                    { name: 'Kintamani', bpsCode: '51.06.04' }
                ]
            }, {
                name: 'Karangasem',
                bpscode: '51.07',
                districts: [
                    { name: 'Rendang', bpsCode: '51.07.01' },
                    { name: 'Sidemen', bpsCode: '51.07.02' },
                    { name: 'Manggis', bpsCode: '51.07.03' },
                    { name: 'Karangasem (Karang Asem)', bpsCode: '51.07.04' },
                    { name: 'Abang', bpsCode: '51.07.05' },
                    { name: 'Bebandem', bpsCode: '51.07.06' },
                    { name: 'Selat', bpsCode: '51.07.07' },
                    { name: 'Kubu', bpsCode: '51.07.08' }
                ]
            }, {
                name: 'Buleleng',
                bpscode: '51.08',
                districts: [
                    { name: 'Gerokgak', bpsCode: '51.08.01' },
                    { name: 'Seririt', bpsCode: '51.08.02' },
                    { name: 'Busung biu (Busungbiu)', bpsCode: '51.08.03' },
                    { name: 'Banjar', bpsCode: '51.08.04' },
                    { name: 'Sukasada', bpsCode: '51.08.05' },
                    { name: 'Buleleng', bpsCode: '51.08.06' },
                    { name: 'Sawan', bpsCode: '51.08.07' },
                    { name: 'Kubutambahan', bpsCode: '51.08.08' },
                    { name: 'Tejakula', bpsCode: '51.08.09' }
                ]
            }, {
                name: 'Denpasar',
                bpscode: '51.71',
                districts: [
                    { name: 'Denpasar Selatan', bpsCode: '51.71.01' },
                    { name: 'Denpasar Timur', bpsCode: '51.71.02' },
                    { name: 'Denpasar Barat', bpsCode: '51.71.03' },
                    { name: 'Denpasar Utara', bpsCode: '51.71.04' }
                ]
            }
        ]
    },
    BB: {
        regencies: [
            {
                name: 'Bangka',
                bpscode: '19.01',
                districts: []
            }, {
                name: 'Belitung',
                bpscode: '19.02',
                districts: []
            }, {
                name: 'Bangka Selatan',
                bpscode: '19.03',
                districts: []
            }, {
                name: 'Bangka Tengah',
                bpscode: '19.04',
                districts: []
            }, {
                name: 'Bangka Barat',
                bpscode: '19.05',
                districts: []
            }, {
                name: 'Belitung Timur',
                bpscode: '19.06',
                districts: []
            }, {
                name: 'Pangkal Pinang',
                bpscode: '19.71',
                districts: []
            },
        ]
    },
    BE: {
        regencies: [
            {
                name: 'Bengkulu Selatan',
                bpscode: '17.01',
                districts: []
            }, {
                name: 'Rejang Lebong',
                bpscode: '17.02',
                districts: []
            }, {
                name: 'Bengkulu Utara',
                bpscode: '17.03',
                districts: []
            }, {
                name: 'Kaur',
                bpscode: '17.04',
                districts: []
            }, {
                name: 'Seluma',
                bpscode: '17.05',
                districts: []
            }, {
                name: 'Muko Muko',
                bpscode: '17.06',
                districts: []
            }, {
                name: 'Lebong',
                bpscode: '17.07',
                districts: []
            }, {
                name: 'Kepahiang',
                bpscode: '17.08',
                districts: []
            }, {
                name: 'Bengkulu Tengah',
                bpscode: '17.09',
                districts: []
            }, {
                name: 'Bengkulu',
                bpscode: '17.71',
                districts: []
            },
        ]
    },
    BT: {
        regencies: [
            {
                name: 'Pandeglang',
                bpscode: '36.01',
                districts: []
            }, {
                name: 'Lebak',
                bpscode: '36.02',
                districts: []
            }, {
                name: 'Tangerang',
                bpscode: '36.03',
                districts: []
            }, {
                name: 'Serang',
                bpscode: '36.04',
                districts: []
            }, {
                name: 'Tangerang',
                bpscode: '36.71',
                districts: []
            }, {
                name: 'Cilegon',
                bpscode: '36.72',
                districts: []
            }, {
                name: 'Serang',
                bpscode: '36.73',
                districts: []
            }, {
                name: 'Tangerang Selatan',
                bpscode: '36.74',
                districts: []
            },
        ]
    },
    GO: {
        regencies: [
            {
                name: 'Gorontalo',
                bpscode: '75.01',
                districts: []
            }, {
                name: 'Boalemo',
                bpscode: '75.02',
                districts: []
            }, {
                name: 'Bone Bolango',
                bpscode: '75.03',
                districts: []
            }, {
                name: 'Pohuwato',
                bpscode: '75.04',
                districts: []
            }, {
                name: 'Gorontalo Utara',
                bpscode: '75.05',
                districts: []
            }, {
                name: 'Gorontalo',
                bpscode: '75.71',
                districts: []
            },
        ]
    },
    JA: {
        regencies: [
            {
                name: 'Kerinci',
                bpscode: '15.01',
                districts: []
            }, {
                name: 'Merangin',
                bpscode: '15.02',
                districts: []
            }, {
                name: 'Sarolangun',
                bpscode: '15.03',
                districts: []
            }, {
                name: 'Batang Hari',
                bpscode: '15.04',
                districts: []
            }, {
                name: 'Muaro Jambi',
                bpscode: '15.05',
                districts: []
            }, {
                name: 'Tanjung Jabung Barat',
                bpscode: '15.06',
                districts: []
            }, {
                name: 'Tanjung Jabung Timur',
                bpscode: '15.07',
                districts: []
            }, {
                name: 'Bungo',
                bpscode: '15.08',
                districts: []
            }, {
                name: 'Tebo',
                bpscode: '15.09',
                districts: []
            }, {
                name: 'Jambi',
                bpscode: '15.71',
                districts: []
            }, {
                name: 'Sungaipenuh',
                bpscode: '15.72',
                districts: []
            },
        ]
    },
    JB: {
        regencies: [
            {
                name: 'Bogor',
                bpscode: '32.01',
                districts: []
            }, {
                name: 'Sukabumi',
                bpscode: '32.02',
                districts: []
            }, {
                name: 'Cianjur',
                bpscode: '32.03',
                districts: []
            }, {
                name: 'Bandung',
                bpscode: '32.04',
                districts: []
            }, {
                name: 'Garut',
                bpscode: '32.05',
                districts: []
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.06',
                districts: []
            }, {
                name: 'Ciamis',
                bpscode: '32.07',
                districts: []
            }, {
                name: 'Kuningan',
                bpscode: '32.08',
                districts: []
            }, {
                name: 'Cirebon',
                bpscode: '32.09',
                districts: []
            }, {
                name: 'Majalengka',
                bpscode: '32.10',
                districts: []
            }, {
                name: 'Sumedang',
                bpscode: '32.11',
                districts: []
            }, {
                name: 'Indramayu',
                bpscode: '32.12',
                districts: []
            }, {
                name: 'Subang',
                bpscode: '32.13',
                districts: []
            }, {
                name: 'Purwakarta',
                bpscode: '32.14',
                districts: []
            }, {
                name: 'Karawang',
                bpscode: '32.15',
                districts: []
            }, {
                name: 'Bekasi',
                bpscode: '32.16',
                districts: []
            }, {
                name: 'Bandung Barat',
                bpscode: '32.17',
                districts: []
            }, {
                name: 'Pangandaran',
                bpscode: '32.18',
                districts: []
            }, {
                name: 'Bogor',
                bpscode: '32.71',
                districts: []
            }, {
                name: 'Sukabumi',
                bpscode: '32.72',
                districts: []
            }, {
                name: 'Bandung',
                bpscode: '32.73',
                districts: []
            }, {
                name: 'Cirebon',
                bpscode: '32.74',
                districts: []
            }, {
                name: 'Bekasi',
                bpscode: '32.75',
                districts: []
            }, {
                name: 'Depok',
                bpscode: '32.76',
                districts: []
            }, {
                name: 'Cimahi',
                bpscode: '32.77',
                districts: []
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.78',
                districts: []
            }, {
                name: 'Banjar',
                bpscode: '32.79',
                districts: []
            },
        ]
    },
    JI: {
        regencies: [
            {
                name: 'Pacitan',
                bpscode: '35.01',
                districts: []
            }, {
                name: 'Ponorogo',
                bpscode: '35.02',
                districts: []
            }, {
                name: 'Trenggalek',
                bpscode: '35.03',
                districts: []
            }, {
                name: 'Tulungagung',
                bpscode: '35.04',
                districts: []
            }, {
                name: 'Blitar',
                bpscode: '35.05',
                districts: []
            }, {
                name: 'Kediri',
                bpscode: '35.06',
                districts: []
            }, {
                name: 'Malang',
                bpscode: '35.07',
                districts: []
            }, {
                name: 'Lumajang',
                bpscode: '35.08',
                districts: []
            }, {
                name: 'Jember',
                bpscode: '35.09',
                districts: []
            }, {
                name: 'Banyuwangi',
                bpscode: '35.10',
                districts: []
            }, {
                name: 'Bondowoso',
                bpscode: '35.11',
                districts: []
            }, {
                name: 'Situbondo',
                bpscode: '35.12',
                districts: []
            }, {
                name: 'Probolinggo',
                bpscode: '35.13',
                districts: []
            }, {
                name: 'Pasuruan',
                bpscode: '35.14',
                districts: []
            }, {
                name: 'Sidoarjo',
                bpscode: '35.15',
                districts: []
            }, {
                name: 'Mojokerto',
                bpscode: '35.16',
                districts: []
            }, {
                name: 'Jombang',
                bpscode: '35.17',
                districts: []
            }, {
                name: 'Nganjuk',
                bpscode: '35.18',
                districts: []
            }, {
                name: 'Madiun',
                bpscode: '35.19',
                districts: []
            }, {
                name: 'Magetan',
                bpscode: '35.20',
                districts: []
            }, {
                name: 'Ngawi',
                bpscode: '35.21',
                districts: []
            }, {
                name: 'Bojonegoro',
                bpscode: '35.22',
                districts: []
            }, {
                name: 'Tuban',
                bpscode: '35.23',
                districts: []
            }, {
                name: 'Lamongan',
                bpscode: '35.24',
                districts: []
            }, {
                name: 'Gresik',
                bpscode: '35.25',
                districts: []
            }, {
                name: 'Bangkalan',
                bpscode: '35.26',
                districts: []
            }, {
                name: 'Sampang',
                bpscode: '35.27',
                districts: []
            }, {
                name: 'Pamekasan',
                bpscode: '35.28',
                districts: []
            }, {
                name: 'Sumenep',
                bpscode: '35.29',
                districts: []
            }, {
                name: 'Kediri',
                bpscode: '35.71',
                districts: []
            }, {
                name: 'Blitar',
                bpscode: '35.72',
                districts: []
            }, {
                name: 'Malang',
                bpscode: '35.73',
                districts: []
            }, {
                name: 'Probolinggo',
                bpscode: '35.74',
                districts: []
            }, {
                name: 'Pasuruan',
                bpscode: '35.75',
                districts: []
            }, {
                name: 'Mojokerto',
                bpscode: '35.76',
                districts: []
            }, {
                name: 'Madiun',
                bpscode: '35.77',
                districts: []
            }, {
                name: 'Surabaya',
                bpscode: '35.78',
                districts: []
            }, {
                name: 'Batu',
                bpscode: '35.79',
                districts: []
            },
        ]
    },
    JK: {
        regencies: [
            {
                name: 'Kepulauan Seribu',
                bpscode: '31.01',
                districts: []
            }, {
                name: 'Jakarta Pusat',
                bpscode: '31.71',
                districts: []
            }, {
                name: 'Jakarta Utara',
                bpscode: '31.72',
                districts: []
            }, {
                name: 'Jakarta Barat',
                bpscode: '31.73',
                districts: []
            }, {
                name: 'Jakarta Selatan',
                bpscode: '31.74',
                districts: []
            }, {
                name: 'Jakarta Timur',
                bpscode: '31.75',
                districts: []
            },
        ]
    },
    JT: {
        regencies: [
            {
                name: 'Cilacap',
                bpscode: '33.01',
                districts: []
            }, {
                name: 'Banyumas',
                bpscode: '33.02',
                districts: []
            }, {
                name: 'Purbalingga',
                bpscode: '33.03',
                districts: []
            }, {
                name: 'Banjarnegara',
                bpscode: '33.04',
                districts: []
            }, {
                name: 'Kebumen',
                bpscode: '33.05',
                districts: []
            }, {
                name: 'Purworejo',
                bpscode: '33.06',
                districts: []
            }, {
                name: 'Wonosobo',
                bpscode: '33.07',
                districts: []
            }, {
                name: 'Magelang',
                bpscode: '33.08',
                districts: []
            }, {
                name: 'Boyolali',
                bpscode: '33.09',
                districts: []
            }, {
                name: 'Klaten',
                bpscode: '33.10',
                districts: []
            }, {
                name: 'Sukoharjo',
                bpscode: '33.11',
                districts: []
            }, {
                name: 'Wonogiri',
                bpscode: '33.12',
                districts: []
            }, {
                name: 'Karanganyar',
                bpscode: '33.13',
                districts: []
            }, {
                name: 'Sragen',
                bpscode: '33.14',
                districts: []
            }, {
                name: 'Grobogan',
                bpscode: '33.15',
                districts: []
            }, {
                name: 'Blora',
                bpscode: '33.16',
                districts: []
            }, {
                name: 'Rembang',
                bpscode: '33.17',
                districts: []
            }, {
                name: 'Pati',
                bpscode: '33.18',
                districts: []
            }, {
                name: 'Kudus',
                bpscode: '33.19',
                districts: []
            }, {
                name: 'Jepara',
                bpscode: '33.20',
                districts: []
            }, {
                name: 'Demak',
                bpscode: '33.21',
                districts: []
            }, {
                name: 'Semarang',
                bpscode: '33.22',
                districts: []
            }, {
                name: 'Temanggung',
                bpscode: '33.23',
                districts: []
            }, {
                name: 'Kendal',
                bpscode: '33.24',
                districts: []
            }, {
                name: 'Batang',
                bpscode: '33.25',
                districts: []
            }, {
                name: 'Pekalongan',
                bpscode: '33.26',
                districts: []
            }, {
                name: 'Pemalang',
                bpscode: '33.27',
                districts: []
            }, {
                name: 'Tegal',
                bpscode: '33.28',
                districts: []
            }, {
                name: 'Brebes',
                bpscode: '33.29',
                districts: []
            }, {
                name: 'Magelang',
                bpscode: '33.71',
                districts: []
            }, {
                name: 'Surakarta',
                bpscode: '33.72',
                districts: []
            }, {
                name: 'Salatiga',
                bpscode: '33.73',
                districts: []
            }, {
                name: 'Semarang',
                bpscode: '33.74',
                districts: []
            }, {
                name: 'Pekalongan',
                bpscode: '33.75',
                districts: []
            }, {
                name: 'Tegal',
                bpscode: '33.76',
                districts: []
            },
        ]
    },
    KB: {
        regencies: [
            {
                name: 'Sambas',
                bpscode: '61.01',
                districts: []
            }, {
                name: 'Mempawah',
                bpscode: '61.02',
                districts: []
            }, {
                name: 'Sanggau',
                bpscode: '61.03',
                districts: []
            }, {
                name: 'Ketapang',
                bpscode: '61.04',
                districts: []
            }, {
                name: 'Sintang',
                bpscode: '61.05',
                districts: []
            }, {
                name: 'Kapuas Hulu',
                bpscode: '61.06',
                districts: []
            }, {
                name: 'Bengkayang',
                bpscode: '61.07',
                districts: []
            }, {
                name: 'Landak',
                bpscode: '61.08',
                districts: []
            }, {
                name: 'Sekadau',
                bpscode: '61.09',
                districts: []
            }, {
                name: 'Melawi',
                bpscode: '61.10',
                districts: []
            }, {
                name: 'Kayong Utara',
                bpscode: '61.11',
                districts: []
            }, {
                name: 'Kubu Raya',
                bpscode: '61.12',
                districts: []
            }, {
                name: 'Pontianak',
                bpscode: '61.71',
                districts: []
            }, {
                name: 'Singkawang',
                bpscode: '61.72',
                districts: []
            },
        ]
    },
    KI: {
        regencies: [
            {
                name: 'Paser',
                bpscode: '64.01',
                districts: []
            }, {
                name: 'Kutai Kartanegara',
                bpscode: '64.02',
                districts: []
            }, {
                name: 'Berau',
                bpscode: '64.03',
                districts: []
            }, {
                name: 'Kutai Barat',
                bpscode: '64.07',
                districts: []
            }, {
                name: 'Kutai Timur',
                bpscode: '64.08',
                districts: []
            }, {
                name: 'Penajam Paser Utara',
                bpscode: '64.09',
                districts: []
            }, {
                name: 'Mahakam Ulu',
                bpscode: '64.11',
                districts: []
            }, {
                name: 'Balikpapan',
                bpscode: '64.71',
                districts: []
            }, {
                name: 'Samarinda',
                bpscode: '64.72',
                districts: []
            }, {
                name: 'Bontang',
                bpscode: '64.74',
                districts: []
            },
        ]
    },
    KR: {
        regencies: [
            {
                name: 'Bintan',
                bpscode: '21.01',
                districts: []
            }, {
                name: 'Karimun',
                bpscode: '21.02',
                districts: []
            }, {
                name: 'Natuna',
                bpscode: '21.03',
                districts: []
            }, {
                name: 'Lingga',
                bpscode: '21.04',
                districts: []
            }, {
                name: 'Kepulauan Anambas',
                bpscode: '21.05',
                districts: []
            }, {
                name: 'Batam',
                bpscode: '21.71',
                districts: []
            }, {
                name: 'Tanjung Pinang',
                bpscode: '21.72',
                districts: []
            },
        ]
    },
    KS: {
        regencies: [
            {
                name: 'Tanah Laut',
                bpscode: '63.01',
                districts: []
            }, {
                name: 'Kotabaru',
                bpscode: '63.02',
                districts: []
            }, {
                name: 'Banjar',
                bpscode: '63.03',
                districts: []
            }, {
                name: 'Barito Kuala',
                bpscode: '63.04',
                districts: []
            }, {
                name: 'Tapin',
                bpscode: '63.05',
                districts: []
            }, {
                name: 'Hulu Sungai Selatan',
                bpscode: '63.06',
                districts: []
            }, {
                name: 'Hulu Sungai Tengah',
                bpscode: '63.07',
                districts: []
            }, {
                name: 'Hulu Sungai Utara',
                bpscode: '63.08',
                districts: []
            }, {
                name: 'Tabalong',
                bpscode: '63.09',
                districts: []
            }, {
                name: 'Tanah Bumbu',
                bpscode: '63.10',
                districts: []
            }, {
                name: 'Balangan',
                bpscode: '63.11',
                districts: []
            }, {
                name: 'Banjarmasin',
                bpscode: '63.71',
                districts: []
            }, {
                name: 'Banjarbaru',
                bpscode: '63.72',
                districts: []
            },
        ]
    },
    KT: {
        regencies: [
            {
                name: 'Kotawaringin Barat',
                bpscode: '62.01',
                districts: []
            }, {
                name: 'Kotawaringin Timur',
                bpscode: '62.02',
                districts: []
            }, {
                name: 'Kapuas',
                bpscode: '62.03',
                districts: []
            }, {
                name: 'Barito Selatan',
                bpscode: '62.04',
                districts: []
            }, {
                name: 'Barito Utara',
                bpscode: '62.05',
                districts: []
            }, {
                name: 'Katingan',
                bpscode: '62.06',
                districts: []
            }, {
                name: 'Seruyan',
                bpscode: '62.07',
                districts: []
            }, {
                name: 'Sukamara',
                bpscode: '62.08',
                districts: []
            }, {
                name: 'Lamandau',
                bpscode: '62.09',
                districts: []
            }, {
                name: 'Gunung Mas',
                bpscode: '62.10',
                districts: []
            }, {
                name: 'Pulang Pisau',
                bpscode: '62.11',
                districts: []
            }, {
                name: 'Murung Raya',
                bpscode: '62.12',
                districts: []
            }, {
                name: 'Barito Timur',
                bpscode: '62.13',
                districts: []
            }, {
                name: 'Palangka Raya',
                bpscode: '62.71',
                districts: []
            },
        ]
    },
    KU: {
        regencies: [
            {
                name: 'Bulungan',
                bpscode: '65.01',
                districts: []
            }, {
                name: 'Malinau',
                bpscode: '65.02',
                districts: []
            }, {
                name: 'Nunukan',
                bpscode: '65.03',
                districts: []
            }, {
                name: 'Tana Tidung',
                bpscode: '65.04',
                districts: []
            }, {
                name: 'Tarakan',
                bpscode: '65.71',
                districts: []
            },
        ]
    },
    LA: {
        regencies: [
            {
                name: 'Lampung Selatan',
                bpscode: '18.01',
                districts: []
            }, {
                name: 'Lampung Tengah',
                bpscode: '18.02',
                districts: []
            }, {
                name: 'Lampung Utara',
                bpscode: '18.03',
                districts: []
            }, {
                name: 'Lampung Barat',
                bpscode: '18.04',
                districts: []
            }, {
                name: 'Tulang Bawang',
                bpscode: '18.05',
                districts: []
            }, {
                name: 'Tanggamus',
                bpscode: '18.06',
                districts: []
            }, {
                name: 'Lampung Timur',
                bpscode: '18.07',
                districts: []
            }, {
                name: 'Way Kanan',
                bpscode: '18.08',
                districts: []
            }, {
                name: 'Pesawaran',
                bpscode: '18.09',
                districts: []
            }, {
                name: 'Pringsewu',
                bpscode: '18.10',
                districts: []
            }, {
                name: 'Mesuji',
                bpscode: '18.11',
                districts: []
            }, {
                name: 'Tulang Bawang Barat',
                bpscode: '18.12',
                districts: []
            }, {
                name: 'Pesisir Barat',
                bpscode: '18.13',
                districts: []
            }, {
                name: 'Bandar Lampung',
                bpscode: '18.71',
                districts: []
            }, {
                name: 'Metro',
                bpscode: '18.72',
                districts: []
            },
        ]
    },
    MA: {
        regencies: [
            {
                name: 'Maluku Tengah',
                bpscode: '81.01',
                districts: []
            }, {
                name: 'Maluku Tenggara',
                bpscode: '81.02',
                districts: []
            }, {
                name: 'Maluku Tenggara Barat',
                bpscode: '81.03',
                districts: []
            }, {
                name: 'Buru',
                bpscode: '81.04',
                districts: []
            }, {
                name: 'Seram Bagian Timur',
                bpscode: '81.05',
                districts: []
            }, {
                name: 'Seram Bagian Barat',
                bpscode: '81.06',
                districts: []
            }, {
                name: 'Kepulauan Aru',
                bpscode: '81.07',
                districts: []
            }, {
                name: 'Maluku Barat Daya',
                bpscode: '81.08',
                districts: []
            }, {
                name: 'Buru Selatan',
                bpscode: '81.09',
                districts: []
            }, {
                name: 'Ambon',
                bpscode: '81.71',
                districts: []
            }, {
                name: 'Tual',
                bpscode: '81.72',
                districts: []
            },
        ]
    },
    MU: {
        regencies: [
            {
                name: 'Halmahera Barat',
                bpscode: '82.01',
                districts: []
            }, {
                name: 'Halmahera Tengah',
                bpscode: '82.02',
                districts: []
            }, {
                name: 'Halmahera Utara',
                bpscode: '82.03',
                districts: []
            }, {
                name: 'Halmahera Selatan',
                bpscode: '82.04',
                districts: []
            }, {
                name: 'Kepulauan Sula',
                bpscode: '82.05',
                districts: []
            }, {
                name: 'Halmahera Timur',
                bpscode: '82.06',
                districts: []
            }, {
                name: 'Pulau Morotai',
                bpscode: '82.07',
                districts: []
            }, {
                name: 'Pulau Taliabu',
                bpscode: '82.08',
                districts: []
            }, {
                name: 'Ternate',
                bpscode: '82.71',
                districts: []
            }, {
                name: 'Tidore Kepulauan',
                bpscode: '82.72',
                districts: []
            },
        ]
    },
    NB: {
        regencies: [
            {
                name: 'Lombok Barat',
                bpscode: '52.01',
                districts: []
            }, {
                name: 'Lombok Tengah',
                bpscode: '52.02',
                districts: []
            }, {
                name: 'Lombok Timur',
                bpscode: '52.03',
                districts: []
            }, {
                name: 'Sumbawa',
                bpscode: '52.04',
                districts: []
            }, {
                name: 'Dompu',
                bpscode: '52.05',
                districts: []
            }, {
                name: 'Bima',
                bpscode: '52.06',
                districts: []
            }, {
                name: 'Sumbawa Barat',
                bpscode: '52.07',
                districts: []
            }, {
                name: 'Lombok Utara',
                bpscode: '52.08',
                districts: []
            }, {
                name: 'Mataram',
                bpscode: '52.71',
                districts: []
            }, {
                name: 'Bima',
                bpscode: '52.72',
                districts: []
            },
        ]
    },
    NT: {
        regencies: [
            {
                name: 'Kupang',
                bpscode: '53.01',
                districts: []
            }, {
                name: 'Timor Tengah Selatan',
                bpscode: '53.02',
                districts: []
            }, {
                name: 'Timor Tengah Utara',
                bpscode: '53.03',
                districts: []
            }, {
                name: 'Belu',
                bpscode: '53.04',
                districts: []
            }, {
                name: 'Alor',
                bpscode: '53.05',
                districts: []
            }, {
                name: 'Flores Timur',
                bpscode: '53.06',
                districts: []
            }, {
                name: 'Sikka',
                bpscode: '53.07',
                districts: []
            }, {
                name: 'Ende',
                bpscode: '53.08',
                districts: []
            }, {
                name: 'Ngada',
                bpscode: '53.09',
                districts: []
            }, {
                name: 'Manggarai',
                bpscode: '53.10',
                districts: []
            }, {
                name: 'Sumba Timur',
                bpscode: '53.11',
                districts: []
            }, {
                name: 'Sumba Barat',
                bpscode: '53.12',
                districts: []
            }, {
                name: 'Lembata',
                bpscode: '53.13',
                districts: []
            }, {
                name: 'Rote Ndao',
                bpscode: '53.14',
                districts: []
            }, {
                name: 'Manggarai Barat',
                bpscode: '53.15',
                districts: []
            }, {
                name: 'Nagekeo',
                bpscode: '53.16',
                districts: []
            }, {
                name: 'Sumba Tengah',
                bpscode: '53.17',
                districts: []
            }, {
                name: 'Sumba Barat Daya',
                bpscode: '53.18',
                districts: []
            }, {
                name: 'Manggarai Timur',
                bpscode: '53.19',
                districts: []
            }, {
                name: 'Sabu Raijua',
                bpscode: '53.20',
                districts: []
            }, {
                name: 'Malaka',
                bpscode: '53.21',
                districts: []
            }, {
                name: 'Kupang',
                bpscode: '53.71',
                districts: []
            },
        ]
    },
    PA: {
        regencies: [
            {
                name: 'Sorong',
                bpscode: '92.01',
                districts: []
            }, {
                name: 'Manokwari',
                bpscode: '92.02',
                districts: []
            }, {
                name: 'Fakfak',
                bpscode: '92.03',
                districts: []
            }, {
                name: 'Sorong Selatan',
                bpscode: '92.04',
                districts: []
            }, {
                name: 'Raja Ampat',
                bpscode: '92.05',
                districts: []
            }, {
                name: 'Teluk Bintuni',
                bpscode: '92.06',
                districts: []
            }, {
                name: 'Teluk Wondama',
                bpscode: '92.07',
                districts: []
            }, {
                name: 'Kaimana',
                bpscode: '92.08',
                districts: []
            }, {
                name: 'Tambrauw',
                bpscode: '92.09',
                districts: []
            }, {
                name: 'Maybrat',
                bpscode: '92.10',
                districts: []
            }, {
                name: 'Manokwari Selatan',
                bpscode: '92.11',
                districts: []
            }, {
                name: 'Pegunungan Arfak',
                bpscode: '92.12',
                districts: []
            }, {
                name: 'Sorong',
                bpscode: '92.71',
                districts: []
            }
        ]
    },
    PB: {
        regencies: [
            {
                name: 'Merauke',
                bpscode: '91.01',
                districts: []
            }, {
                name: 'Jayawijaya',
                bpscode: '91.02',
                districts: []
            }, {
                name: 'Jayapura',
                bpscode: '91.03',
                districts: []
            }, {
                name: 'Nabire',
                bpscode: '91.04',
                districts: []
            }, {
                name: 'Kepulauan Yapen',
                bpscode: '91.05',
                districts: []
            }, {
                name: 'Biak Numfor',
                bpscode: '91.06',
                districts: []
            }, {
                name: 'Puncak Jaya',
                bpscode: '91.07',
                districts: []
            }, {
                name: 'Paniai',
                bpscode: '91.08',
                districts: []
            }, {
                name: 'Mimika',
                bpscode: '91.09',
                districts: []
            }, {
                name: 'Sarmi',
                bpscode: '91.10',
                districts: []
            }, {
                name: 'Keerom',
                bpscode: '91.11',
                districts: []
            }, {
                name: 'Pegunungan Bintang',
                bpscode: '91.12',
                districts: []
            }, {
                name: 'Yahukimo',
                bpscode: '91.13',
                districts: []
            }, {
                name: 'Tolikara',
                bpscode: '91.14',
                districts: []
            }, {
                name: 'Waropen',
                bpscode: '91.15',
                districts: []
            }, {
                name: 'Boven Digoel',
                bpscode: '91.16',
                districts: []
            }, {
                name: 'Mappi',
                bpscode: '91.17',
                districts: []
            }, {
                name: 'Asmat',
                bpscode: '91.18',
                districts: []
            }, {
                name: 'Supiori',
                bpscode: '91.19',
                districts: []
            }, {
                name: 'Mamberamo Raya',
                bpscode: '91.20',
                districts: []
            }, {
                name: 'Mamberamo Tengah',
                bpscode: '91.21',
                districts: []
            }, {
                name: 'Yalimo',
                bpscode: '91.22',
                districts: []
            }, {
                name: 'Lanny Jaya',
                bpscode: '91.23',
                districts: []
            }, {
                name: 'Nduga',
                bpscode: '91.24',
                districts: []
            }, {
                name: 'Puncak',
                bpscode: '91.25',
                districts: []
            }, {
                name: 'Dogiyai',
                bpscode: '91.26',
                districts: []
            }, {
                name: 'Intan Jaya',
                bpscode: '91.27',
                districts: []
            }, {
                name: 'Deiyai',
                bpscode: '91.28',
                districts: []
            }, {
                name: 'Jayapura',
                bpscode: '91.71',
                districts: []
            },
        ]
    },
    RI: {
        regencies: [
            {
                name: 'Kampar',
                bpscode: '14.01',
                districts: []
            }, {
                name: 'Indragiri Hulu',
                bpscode: '14.02',
                districts: []
            }, {
                name: 'Bengkalis',
                bpscode: '14.03',
                districts: []
            }, {
                name: 'Indragiri Hilir',
                bpscode: '14.04',
                districts: []
            }, {
                name: 'Pelalawan',
                bpscode: '14.05',
                districts: []
            }, {
                name: 'Rokan Hulu',
                bpscode: '14.06',
                districts: []
            }, {
                name: 'Rokan Hilir',
                bpscode: '14.07',
                districts: []
            }, {
                name: 'Siak',
                bpscode: '14.08',
                districts: []
            }, {
                name: 'Kuantan Singingi',
                bpscode: '14.09',
                districts: []
            }, {
                name: 'Kepulauan Meranti',
                bpscode: '14.10',
                districts: []
            }, {
                name: 'Pekanbaru',
                bpscode: '14.71',
                districts: []
            }, {
                name: 'Dumai',
                bpscode: '14.72',
                districts: []
            }
        ]
    },
    SA: {
        regencies: [
            {
                name: 'Bolaang Mongondow',
                bpscode: '71.01',
                districts: []
            }, {
                name: 'Minahasa',
                bpscode: '71.02',
                districts: []
            }, {
                name: 'Kepulauan Sangihe',
                bpscode: '71.03',
                districts: []
            }, {
                name: 'Kepulauan Talaud',
                bpscode: '71.04',
                districts: []
            }, {
                name: 'Minahasa Selatan',
                bpscode: '71.05',
                districts: []
            }, {
                name: 'Minahasa Utara',
                bpscode: '71.06',
                districts: []
            }, {
                name: 'Minahasa Tenggara',
                bpscode: '71.07',
                districts: []
            }, {
                name: 'Bolaang Mongondow Utara',
                bpscode: '71.08',
                districts: []
            }, {
                name: 'Kepulauan Siau Tagulandang Biaro (Sitaro)',
                bpscode: '71.09',
                districts: []
            }, {
                name: 'Bolaang Mongondow Timur',
                bpscode: '71.10',
                districts: []
            }, {
                name: 'Bolaang Mongondow Selatan',
                bpscode: '71.11',
                districts: []
            }, {
                name: 'Manado',
                bpscode: '71.71',
                districts: []
            }, {
                name: 'Bitung',
                bpscode: '71.72',
                districts: []
            }, {
                name: 'Tomohon',
                bpscode: '71.73',
                districts: []
            }, {
                name: 'Kotamobagu',
                bpscode: '71.74',
                districts: []
            },
        ]
    },
    SB: {
        regencies: [
            {
                name: 'Pesisir Selatan',
                bpscode: '13.01',
                districts: []
            }, {
                name: 'Solok',
                bpscode: '13.02',
                districts: []
            }, {
                name: 'Sijunjung',
                bpscode: '13.03',
                districts: []
            }, {
                name: 'Tanah Datar',
                bpscode: '13.04',
                districts: []
            }, {
                name: 'Padang Pariaman',
                bpscode: '13.05',
                districts: []
            }, {
                name: 'Agam',
                bpscode: '13.06',
                districts: []
            }, {
                name: 'Lima Puluh Kota',
                bpscode: '13.07',
                districts: []
            }, {
                name: 'Pasaman',
                bpscode: '13.08',
                districts: []
            }, {
                name: 'Kepulauan Mentawai',
                bpscode: '13.09',
                districts: []
            }, {
                name: 'Dharmasraya',
                bpscode: '13.10',
                districts: []
            }, {
                name: 'Solok Selatan',
                bpscode: '13.11',
                districts: []
            }, {
                name: 'Pasaman Barat',
                bpscode: '13.12',
                districts: []
            }, {
                name: 'Padang',
                bpscode: '13.71',
                districts: []
            }, {
                name: 'Solok',
                bpscode: '13.72',
                districts: []
            }, {
                name: 'Sawah Lunto',
                bpscode: '13.73',
                districts: []
            }, {
                name: 'Padang Panjang',
                bpscode: '13.74',
                districts: []
            }, {
                name: 'Bukittinggi',
                bpscode: '13.75',
                districts: []
            }, {
                name: 'Payakumbuh',
                bpscode: '13.76',
                districts: []
            }, {
                name: 'Pariaman',
                bpscode: '13.77',
                districts: []
            }
        ]
    },
    SG: {
        regencies: [
            {
                name: 'Kolaka',
                bpscode: '74.01',
                districts: []
            }, {
                name: 'Konawe',
                bpscode: '74.02',
                districts: []
            }, {
                name: 'Muna',
                bpscode: '74.03',
                districts: []
            }, {
                name: 'Buton',
                bpscode: '74.04',
                districts: []
            }, {
                name: 'Konawe Selatan',
                bpscode: '74.05',
                districts: []
            }, {
                name: 'Bombana',
                bpscode: '74.06',
                districts: []
            }, {
                name: 'Wakatobi',
                bpscode: '74.07',
                districts: []
            }, {
                name: 'Kolaka Utara',
                bpscode: '74.08',
                districts: []
            }, {
                name: 'Konawe Utara',
                bpscode: '74.09',
                districts: []
            }, {
                name: 'Buton Utara',
                bpscode: '74.10',
                districts: []
            }, {
                name: 'Kolaka Timur',
                bpscode: '74.11',
                districts: []
            }, {
                name: 'Konawe Kepulauan',
                bpscode: '74.12',
                districts: []
            }, {
                name: 'Muna Barat',
                bpscode: '74.13',
                districts: []
            }, {
                name: 'Buton Tengah',
                bpscode: '74.14',
                districts: []
            }, {
                name: 'Buton Selatan',
                bpscode: '74.15',
                districts: []
            }, {
                name: 'Kendari',
                bpscode: '74.71',
                districts: []
            }, {
                name: 'Bau-Bau',
                bpscode: '74.72',
                districts: []
            },
        ]
    },
    SN: {
        regencies: [
            {
                name: 'Kepulauan Selayar',
                bpscode: '73.01',
                districts: []
            }, {
                name: 'Bulukumba',
                bpscode: '73.02',
                districts: []
            }, {
                name: 'Bantaeng',
                bpscode: '73.03',
                districts: []
            }, {
                name: 'Jeneponto',
                bpscode: '73.04',
                districts: []
            }, {
                name: 'Takalar',
                bpscode: '73.05',
                districts: []
            }, {
                name: 'Gowa',
                bpscode: '73.06',
                districts: []
            }, {
                name: 'Sinjai',
                bpscode: '73.07',
                districts: []
            }, {
                name: 'Bone',
                bpscode: '73.08',
                districts: []
            }, {
                name: 'Maros',
                bpscode: '73.09',
                districts: []
            }, {
                name: 'Pangkajene Kepulauan',
                bpscode: '73.10',
                districts: []
            }, {
                name: 'Barru',
                bpscode: '73.11',
                districts: []
            }, {
                name: 'Soppeng',
                bpscode: '73.12',
                districts: []
            }, {
                name: 'Wajo',
                bpscode: '73.13',
                districts: []
            }, {
                name: 'Sidenreng Rappang',
                bpscode: '73.14',
                districts: []
            }, {
                name: 'Pinrang',
                bpscode: '73.15',
                districts: []
            }, {
                name: 'Enrekang',
                bpscode: '73.16',
                districts: []
            }, {
                name: 'Luwu',
                bpscode: '73.17',
                districts: []
            }, {
                name: 'Tana Toraja',
                bpscode: '73.18',
                districts: []
            }, {
                name: 'Luwu Utara',
                bpscode: '73.22',
                districts: []
            }, {
                name: 'Luwu Timur',
                bpscode: '73.24',
                districts: []
            }, {
                name: 'Toraja Utara',
                bpscode: '73.26',
                districts: []
            }, {
                name: 'Makassar',
                bpscode: '73.71',
                districts: []
            }, {
                name: 'Parepare',
                bpscode: '73.72',
                districts: []
            }, {
                name: 'Palopo',
                bpscode: '73.73',
                districts: []
            },
        ]
    },
    SR: {
        regencies: [
            {
                name: 'Mamuju Utara',
                bpscode: '76.01',
                districts: []
            }, {
                name: 'Mamuju',
                bpscode: '76.02',
                districts: []
            }, {
                name: 'Mamasa',
                bpscode: '76.03',
                districts: []
            }, {
                name: 'Polewali Mandar',
                bpscode: '76.04',
                districts: []
            }, {
                name: 'Majene',
                bpscode: '76.05',
                districts: []
            }, {
                name: 'Mamuju Tengah',
                bpscode: '76.06',
                districts: []
            },
        ]
    },
    SS: {
        regencies: [
            {
                name: 'Ogan Komering Ulu',
                bpscode: '16.01',
                districts: []
            }, {
                name: 'Ogan Komering Ilir',
                bpscode: '16.02',
                districts: []
            }, {
                name: 'Muara Enim',
                bpscode: '16.03',
                districts: []
            }, {
                name: 'Lahat',
                bpscode: '16.04',
                districts: []
            }, {
                name: 'Musi Rawas',
                bpscode: '16.05',
                districts: []
            }, {
                name: 'Musi Banyuasin',
                bpscode: '16.06',
                districts: []
            }, {
                name: 'Banyuasin',
                bpscode: '16.07',
                districts: []
            }, {
                name: 'Ogan Komering Ulu Timur',
                bpscode: '16.08',
                districts: []
            }, {
                name: 'Ogan Komering Ulu Selatan',
                bpscode: '16.09',
                districts: []
            }, {
                name: 'Ogan Ilir',
                bpscode: '16.10',
                districts: []
            }, {
                name: 'Empat Lawang',
                bpscode: '16.11',
                districts: []
            }, {
                name: 'Penukal Abab Lematang Ilir',
                bpscode: '16.12',
                districts: []
            }, {
                name: 'Musi Rawas Utara',
                bpscode: '16.13',
                districts: []
            }, {
                name: 'Palembang',
                bpscode: '16.71',
                districts: []
            }, {
                name: 'Pagar Alam',
                bpscode: '16.72',
                districts: []
            }, {
                name: 'Lubuk Linggau',
                bpscode: '16.73',
                districts: []
            }, {
                name: 'Prabumulih',
                bpscode: '16.74',
                districts: []
            },
        ]
    },
    ST: {
        regencies: [
            {
                name: 'Banggai',
                bpscode: '72.01',
                districts: []
            }, {
                name: 'Poso',
                bpscode: '72.02',
                districts: []
            }, {
                name: 'Donggala',
                bpscode: '72.03',
                districts: []
            }, {
                name: 'Toli-Toli',
                bpscode: '72.04',
                districts: []
            }, {
                name: 'Buol',
                bpscode: '72.05',
                districts: []
            }, {
                name: 'Morowali',
                bpscode: '72.06',
                districts: []
            }, {
                name: 'Banggai Kepulauan',
                bpscode: '72.07',
                districts: []
            }, {
                name: 'Parigi Moutong',
                bpscode: '72.08',
                districts: []
            }, {
                name: 'Tojo Una-Una',
                bpscode: '72.09',
                districts: []
            }, {
                name: 'Sigi',
                bpscode: '72.10',
                districts: []
            }, {
                name: 'Banggai Laut',
                bpscode: '72.11',
                districts: []
            }, {
                name: 'Morowali Utara',
                bpscode: '72.12',
                districts: []
            }, {
                name: 'Palu',
                bpscode: '72.71',
                districts: []
            },
        ]
    },
    SU: {
        regencies: [
            {
                name: 'Tapanuli Tengah',
                bpscode: '12.01',
                districts: []
            }, {
                name: 'Tapanuli Utara',
                bpscode: '12.02',
                districts: []
            }, {
                name: 'Tapanuli Selatan',
                bpscode: '12.03',
                districts: []
            }, {
                name: 'Nias',
                bpscode: '12.04',
                districts: []
            }, {
                name: 'Langkat',
                bpscode: '12.05',
                districts: []
            }, {
                name: 'Karo',
                bpscode: '12.06',
                districts: []
            }, {
                name: 'Deli Serdang',
                bpscode: '12.07',
                districts: []
            }, {
                name: 'Simalungun',
                bpscode: '12.08',
                districts: []
            }, {
                name: 'Asahan',
                bpscode: '12.09',
                districts: []
            }, {
                name: 'Labuhanbatu',
                bpscode: '12.10',
                districts: []
            }, {
                name: 'Dairi',
                bpscode: '12.11',
                districts: []
            }, {
                name: 'Toba Samosir',
                bpscode: '12.12',
                districts: []
            }, {
                name: 'Mandailing Natal',
                bpscode: '12.13',
                districts: []
            }, {
                name: 'Nias Selatan',
                bpscode: '12.14',
                districts: []
            }, {
                name: 'Pakpak Bharat',
                bpscode: '12.15',
                districts: []
            }, {
                name: 'Humbang Hasundutan',
                bpscode: '12.16',
                districts: []
            }, {
                name: 'Samosir',
                bpscode: '12.17',
                districts: []
            }, {
                name: 'Serdang Bedagai',
                bpscode: '12.18',
                districts: []
            }, {
                name: 'Batu Bara',
                bpscode: '12.19',
                districts: []
            }, {
                name: 'Padang Lawas Utara',
                bpscode: '12.20',
                districts: []
            }, {
                name: 'Padang Lawas',
                bpscode: '12.21',
                districts: []
            }, {
                name: 'Labuhanbatu Selatan',
                bpscode: '12.22',
                districts: []
            }, {
                name: 'Labuhanbatu Utara',
                bpscode: '12.23',
                districts: []
            }, {
                name: 'Nias Utara',
                bpscode: '12.24',
                districts: []
            }, {
                name: 'Nias Barat',
                bpscode: '12.25',
                districts: []
            }, {
                name: 'Medan',
                bpscode: '12.71',
                districts: []
            }, {
                name: 'Pematang Siantar',
                bpscode: '12.72',
                districts: []
            }, {
                name: 'Sibolga',
                bpscode: '12.73',
                districts: []
            }, {
                name: 'Tanjung Balai',
                bpscode: '12.74',
                districts: []
            }, {
                name: 'Binjai',
                bpscode: '12.75',
                districts: []
            }, {
                name: 'Tebing Tinggi',
                bpscode: '12.76',
                districts: []
            }, {
                name: 'Padang Sidempuan',
                bpscode: '12.77',
                districts: []
            }, {
                name: 'Gunungsitoli',
                bpscode: '12.78',
                districts: []
            }
        ]
    },
    YO: {
        regencies: [
            {
                name: 'Kabupaten Kulon Progo',
                bpsCode: '34.01',
                districts: [
                    { name: 'Temon', bpsCode: '34.01.01' },
                    { name: 'Wates', bpsCode: '34.01.02' },
                    { name: 'Panjatan', bpsCode: '34.01.03' },
                    { name: 'Galur', bpsCode: '34.01.04' },
                    { name: 'Lendah', bpsCode: '34.01.05' },
                    { name: 'Sentolo', bpsCode: '34.01.06' },
                    { name: 'Pengasih', bpsCode: '34.01.07' },
                    { name: 'Kokap', bpsCode: '34.01.08' },
                    { name: 'Girimulyo', bpsCode: '34.01.09' },
                    { name: 'Nanggulan', bpsCode: '34.01.10' },
                    { name: 'Samigaluh', bpsCode: '34.01.11' },
                    { name: 'Kalibawang', bpsCode: '34.01.12' }
                ]
            }, {
                name: 'Kabupaten Bantul',
                bpsCode: '34.02',
                districts: [
                    { name: 'Srandakan', bpsCode: '34.02.01' },
                    { name: 'Sanden', bpsCode: '34.02.02' },
                    { name: 'Kretek', bpsCode: '34.02.03' },
                    { name: 'Pundong', bpsCode: '34.02.04' },
                    { name: 'Bambanglipuro (Bambang Lipuro)', bpsCode: '34.02.05' },
                    { name: 'Pandak', bpsCode: '34.02.06' },
                    { name: 'Pajangan', bpsCode: '34.02.07' },
                    { name: 'Bantul', bpsCode: '34.02.08' },
                    { name: 'Jetis', bpsCode: '34.02.09' },
                    { name: 'Imogiri', bpsCode: '34.02.10' },
                    { name: 'Dlingo', bpsCode: '34.02.11' },
                    { name: 'Banguntapan', bpsCode: '34.02.12' },
                    { name: 'Pleret', bpsCode: '34.02.13' },
                    { name: 'Piyungan', bpsCode: '34.02.14' },
                    { name: 'Sewon', bpsCode: '34.02.15' },
                    { name: 'Kasihan', bpsCode: '34.02.16' },
                    { name: 'Sedayu', bpsCode: '34.02.17' }
                ]
            }, {
                name: 'Kabupaten Gunung Kidul',
                bpsCode: '34.03',
                districts: [
                    { name: 'Wonosari', bpsCode: '34.03.01' },
                    { name: 'Nglipar', bpsCode: '34.03.02' },
                    { name: 'Playen', bpsCode: '34.03.03' },
                    { name: 'Patuk', bpsCode: '34.03.04' },
                    { name: 'Paliyan', bpsCode: '34.03.05' },
                    { name: 'Panggang', bpsCode: '34.03.06' },
                    { name: 'Tepus', bpsCode: '34.03.07' },
                    { name: 'Semanu', bpsCode: '34.03.08' },
                    { name: 'Karangmojo', bpsCode: '34.03.09' },
                    { name: 'Ponjong', bpsCode: '34.03.10' },
                    { name: 'Rongkop', bpsCode: '34.03.11' },
                    { name: 'Semin', bpsCode: '34.03.12' },
                    { name: 'Ngawen', bpsCode: '34.03.13' },
                    { name: 'Gedangsari (Gedang Sari)', bpsCode: '34.03.14' },
                    { name: 'Saptosari (Sapto Sari)', bpsCode: '34.03.15' },
                    { name: 'Girisubo', bpsCode: '34.03.16' },
                    { name: 'Tanjungsari', bpsCode: '34.03.17' },
                    { name: 'Purwosari', bpsCode: '34.03.18' }
                ]
            }, {
                name: 'Kabupaten Sleman',
                bpsCode: '34.04',
                districts: [
                    { name: 'Gamping', bpsCode: '34.04.01' },
                    { name: 'Godean', bpsCode: '34.04.02' },
                    { name: 'Moyudan', bpsCode: '34.04.03' },
                    { name: 'Minggir', bpsCode: '34.04.04' },
                    { name: 'Seyegan', bpsCode: '34.04.05' },
                    { name: 'Mlati', bpsCode: '34.04.06' },
                    { name: 'Depok', bpsCode: '34.04.07' },
                    { name: 'Berbah', bpsCode: '34.04.08' },
                    { name: 'Prambanan', bpsCode: '34.04.09' },
                    { name: 'Kalasan', bpsCode: '34.04.10' },
                    { name: 'Ngemplak', bpsCode: '34.04.11' },
                    { name: 'Ngaglik', bpsCode: '34.04.12' },
                    { name: 'Sleman', bpsCode: '34.04.13' },
                    { name: 'Tempel', bpsCode: '34.04.14' },
                    { name: 'Turi', bpsCode: '34.04.15' },
                    { name: 'Pakem', bpsCode: '34.04.16' },
                    { name: 'Cangkringan', bpsCode: '34.04.17' }
                ]
            }, {
                name: 'Kota Yogyakarta',
                bpsCode: '34.71',
                districts: [
                    { name: 'Tegalrejo', bpsCode: '34.71.01' },
                    { name: 'Jetis', bpsCode: '34.71.02' },
                    { name: 'Gondokusuman', bpsCode: '34.71.03' },
                    { name: 'Danurejan', bpsCode: '34.71.04' },
                    { name: 'Gedongtengen (Gedong Tengen)', bpsCode: '34.71.05' },
                    { name: 'Ngampilan', bpsCode: '34.71.06' },
                    { name: 'Wirobrajan', bpsCode: '34.71.07' },
                    { name: 'Mantrijeron', bpsCode: '34.71.08' },
                    { name: 'Kraton', bpsCode: '34.71.09' },
                    { name: 'Gondomanan', bpsCode: '34.71.10' },
                    { name: 'Pakualaman', bpsCode: '34.71.11' },
                    { name: 'Mergangsan', bpsCode: '34.71.12' },
                    { name: 'Umbulharjo', bpsCode: '34.71.13' },
                    { name: 'Kotagede', bpsCode: '34.71.14' }
                ]
            }
        ]
    },
};

export const PROVINCE_EXTENDED_DATA = MergeRecursive(PROVINCE_DATA, PROVINCE_DATA_EXTENSION);