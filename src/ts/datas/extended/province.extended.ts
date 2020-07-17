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
                districts: [
                    { name: 'Sungailiat (Sungai Liat)', bpsCode: '19.01.01' },
                    { name: 'Belinyu', bpsCode: '19.01.02' },
                    { name: 'Merawang', bpsCode: '19.01.03' },
                    { name: 'Mendo Barat', bpsCode: '19.01.04' },
                    { name: 'Pemali', bpsCode: '19.01.05' },
                    { name: 'Bakam', bpsCode: '19.01.06' },
                    { name: 'Riau Silip', bpsCode: '19.01.07' },
                    { name: 'Puding Besar', bpsCode: '19.01.08' }
                ]
            }, {
                name: 'Belitung',
                bpscode: '19.02',
                districts: [
                    { name: 'Tanjung Pandan', bpsCode: '19.02.01' },
                    { name: 'Membalong', bpsCode: '19.02.02' },
                    { name: 'Selat Nasik', bpsCode: '19.02.03' },
                    { name: 'Sijuk', bpsCode: '19.02.04' },
                    { name: 'Badau', bpsCode: '19.02.05' }
                ]
            }, {
                name: 'Bangka Selatan',
                bpscode: '19.03',
                districts: [
                    { name: 'Toboali', bpsCode: '19.03.01' },
                    { name: 'Lepar Pongok', bpsCode: '19.03.02' },
                    { name: 'Air Gegas', bpsCode: '19.03.03' },
                    { name: 'Simpang Rimba', bpsCode: '19.03.04' },
                    { name: 'Payung', bpsCode: '19.03.05' },
                    { name: 'Tukak Sadai', bpsCode: '19.03.06' },
                    { name: 'Pulaubesar (Pulau Besar)', bpsCode: '19.03.07' },
                    { name: 'Kepulauan Pongok', bpsCode: '19.03.08' }
                ]
            }, {
                name: 'Bangka Tengah',
                bpscode: '19.04',
                districts: [
                    { name: 'Koba', bpsCode: '19.04.01' },
                    { name: 'Pangkalan Baru', bpsCode: '19.04.02' },
                    { name: 'Sungai Selan', bpsCode: '19.04.03' },
                    { name: 'Simpang Katis', bpsCode: '19.04.04' },
                    { name: 'Namang', bpsCode: '19.04.05' },
                    { name: 'Lubuk Besar', bpsCode: '19.04.06' }
                ]
            }, {
                name: 'Bangka Barat',
                bpscode: '19.05',
                districts: [
                    { name: 'Mentok (Muntok)', bpsCode: '19.05.01' },
                    { name: 'Simpang Teritip', bpsCode: '19.05.02' },
                    { name: 'Jebus', bpsCode: '19.05.03' },
                    { name: 'Kelapa', bpsCode: '19.05.04' },
                    { name: 'Tempilang', bpsCode: '19.05.05' },
                    { name: 'Parittiga', bpsCode: '19.05.06' }
                ]
            }, {
                name: 'Belitung Timur',
                bpscode: '19.06',
                districts: [
                    { name: 'Manggar', bpsCode: '19.06.01' },
                    { name: 'Gantung', bpsCode: '19.06.02' },
                    { name: 'Dendang', bpsCode: '19.06.03' },
                    { name: 'Kelapa Kampit', bpsCode: '19.06.04' },
                    { name: 'Damar', bpsCode: '19.06.05' },
                    { name: 'Simpang Renggiang', bpsCode: '19.06.06' },
                    { name: 'Simpang Pesak', bpsCode: '19.06.07' }
                ]
            }, {
                name: 'Pangkal Pinang',
                bpscode: '19.71',
                districts: [
                    { name: 'Bukitintan (Bukit Intan)', bpsCode: '19.71.01' },
                    { name: 'Taman Sari', bpsCode: '19.71.02' },
                    { name: 'Pangkal Balam', bpsCode: '19.71.03' },
                    { name: 'Rangkui', bpsCode: '19.71.04' },
                    { name: 'Gerunggang', bpsCode: '19.71.05' },
                    { name: 'Gabek', bpsCode: '19.71.06' },
                    { name: 'Girimaya', bpsCode: '19.71.07' }
                ]
            }
        ]
    },
    BE: {
        regencies: [
            {
                name: 'Bengkulu Selatan',
                bpscode: '17.01',
                districts: [
                    { name: 'Kedurang', bpsCode: '17.01.01' },
                    { name: 'Seginim', bpsCode: '17.01.02' },
                    { name: 'Pino', bpsCode: '17.01.03' },
                    { name: 'Manna', bpsCode: '17.01.04' },
                    { name: 'Kota Manna', bpsCode: '17.01.05' },
                    { name: 'Pino Raya (Pinoraya)', bpsCode: '17.01.06' },
                    { name: 'Kedurang Ilir', bpsCode: '17.01.07' },
                    { name: 'Air Nipis', bpsCode: '17.01.08' },
                    { name: 'Ulu Manna', bpsCode: '17.01.09' },
                    { name: 'Bunga Mas', bpsCode: '17.01.10' },
                    { name: 'Pasar Manna', bpsCode: '17.01.11' }
                ]
            }, {
                name: 'Rejang Lebong',
                bpscode: '17.02',
                districts: [
                    { name: 'Kota Padang', bpsCode: '17.02.06' },
                    { name: 'Padang Ulak Tanding', bpsCode: '17.02.07' },
                    { name: 'Sindang Kelingi', bpsCode: '17.02.08' },
                    { name: 'Curup', bpsCode: '17.02.09' },
                    { name: 'Bermani Ulu', bpsCode: '17.02.10' },
                    { name: 'Selupu Rejang', bpsCode: '17.02.11' },
                    { name: 'Curup Utara', bpsCode: '17.02.16' },
                    { name: 'Curup Timur', bpsCode: '17.02.17' },
                    { name: 'Curup Selatan', bpsCode: '17.02.18' },
                    { name: 'Curup Tengah', bpsCode: '17.02.19' },
                    { name: 'Binduriang', bpsCode: '17.02.20' },
                    { name: 'Sindang Beliti Ulu', bpsCode: '17.02.21' },
                    { name: 'Sindang Dataran (Sindang Daratan)', bpsCode: '17.02.22' },
                    { name: 'Sindang Beliti Ilir', bpsCode: '17.02.23' },
                    { name: 'Bermani Ulu Raya', bpsCode: '17.02.24' }
                ]
            }, {
                name: 'Bengkulu Utara',
                bpscode: '17.03',
                districts: [
                    { name: 'Enggano', bpsCode: '17.03.01' },
                    { name: 'Kerkap', bpsCode: '17.03.06' },
                    { name: 'Kota Arga Makmur', bpsCode: '17.03.07' },
                    { name: 'Giri Mulia (Giri Mulya)', bpsCode: '17.03.08' },
                    { name: 'Padang Jaya', bpsCode: '17.03.09' },
                    { name: 'Lais', bpsCode: '17.03.10' },
                    { name: 'Batik Nau', bpsCode: '17.03.11' },
                    { name: 'Ketahun', bpsCode: '17.03.12' },
                    { name: 'Napal Putih', bpsCode: '17.03.13' },
                    { name: 'Putri Hijau', bpsCode: '17.03.14' },
                    { name: 'Air Besi', bpsCode: '17.03.15' },
                    { name: 'Air Napal', bpsCode: '17.03.16' },
                    { name: 'Hulu Palik', bpsCode: '17.03.19' },
                    { name: 'Air Padang', bpsCode: '17.03.20' },
                    { name: 'Arma Jaya', bpsCode: '17.03.21' },
                    { name: 'Tanjung Agung Palik', bpsCode: '17.03.22' },
                    { name: 'Ulok Kupai', bpsCode: '17.03.23' },
                    { name: 'Pinang Raya', bpsCode: '17.03.24' },
                    { name: 'Marga Sakti Sebelat (Marga Sakti)', bpsCode: '17.03.25' }
                ]
            }, {
                name: 'Kaur',
                bpscode: '17.04',
                districts: [
                    { name: 'Kinal', bpsCode: '17.04.01' },
                    { name: 'Tanjung Kemuning', bpsCode: '17.04.02' },
                    { name: 'Kaur Utara', bpsCode: '17.04.03' },
                    { name: 'Kaur Tengah', bpsCode: '17.04.04' },
                    { name: 'Kaur Selatan', bpsCode: '17.04.05' },
                    { name: 'Maje', bpsCode: '17.04.06' },
                    { name: 'Nasal', bpsCode: '17.04.07' },
                    { name: 'Semidang Gumai (Gumay)', bpsCode: '17.04.08' },
                    { name: 'Kelam Tengah', bpsCode: '17.04.09' },
                    { name: 'Luas', bpsCode: '17.04.10' },
                    { name: 'Muara Sahung', bpsCode: '17.04.11' },
                    { name: 'Tetap (Muara Tetap)', bpsCode: '17.04.12' },
                    { name: 'Lungkang Kule', bpsCode: '17.04.13' },
                    { name: 'Padang Guci Hilir', bpsCode: '17.04.14' },
                    { name: 'Padang Guci Hulu', bpsCode: '17.04.15' }
                ]
            }, {
                name: 'Seluma',
                bpscode: '17.05',
                districts: [
                    { name: 'Sukaraja', bpsCode: '17.05.01' },
                    { name: 'Seluma', bpsCode: '17.05.02' },
                    { name: 'Talo', bpsCode: '17.05.03' },
                    { name: 'Semidang Alas', bpsCode: '17.05.04' },
                    { name: 'Semidang Alas Maras', bpsCode: '17.05.05' },
                    { name: 'Air Periukan', bpsCode: '17.05.06' },
                    { name: 'Lubuk Sandi', bpsCode: '17.05.07' },
                    { name: 'Seluma Barat', bpsCode: '17.05.08' },
                    { name: 'Seluma Timur', bpsCode: '17.05.09' },
                    { name: 'Seluma Utara', bpsCode: '17.05.10' },
                    { name: 'Seluma Selatan', bpsCode: '17.05.11' },
                    { name: 'Talo Kecil', bpsCode: '17.05.12' },
                    { name: 'Ulu Talo', bpsCode: '17.05.13' },
                    { name: 'Ilir Talo', bpsCode: '17.05.14' }
                ]
            }, {
                name: 'Muko Muko',
                bpscode: '17.06',
                districts: [
                    { name: 'Lubuk Pinang', bpsCode: '17.06.01' },
                    { name: 'Kota Mukomuko (Mukomuko Utara)', bpsCode: '17.06.02' },
                    { name: 'Teras Terunjam', bpsCode: '17.06.03' },
                    { name: 'Pondok Suguh', bpsCode: '17.06.04' },
                    { name: 'Ipuh (Muko Muko Selatan)', bpsCode: '17.06.05' },
                    { name: 'Malin Deman', bpsCode: '17.06.06' },
                    { name: 'Air Rami', bpsCode: '17.06.07' },
                    { name: 'Teramang Jaya', bpsCode: '17.06.08' },
                    { name: 'Selagan Raya', bpsCode: '17.06.09' },
                    { name: 'Penarik', bpsCode: '17.06.10' },
                    { name: 'XIV Koto', bpsCode: '17.06.11' },
                    { name: 'V Koto', bpsCode: '17.06.12' },
                    { name: 'Air Majunto', bpsCode: '17.06.13' },
                    { name: 'Air Dikit', bpsCode: '17.06.14' },
                    { name: 'Sungai Rumbai', bpsCode: '17.06.15' }
                ]
            }, {
                name: 'Lebong',
                bpscode: '17.07',
                districts: [
                    { name: 'Lebong Utara', bpsCode: '17.07.01' },
                    { name: 'Lebong Atas', bpsCode: '17.07.02' },
                    { name: 'Lebong Tengah', bpsCode: '17.07.03' },
                    { name: 'Lebong Selatan', bpsCode: '17.07.04' },
                    { name: 'Rimbo Pengadang', bpsCode: '17.07.05' },
                    { name: 'Topos', bpsCode: '17.07.06' },
                    { name: 'Bingin Kuning', bpsCode: '17.07.07' },
                    { name: 'Lebong Sakti', bpsCode: '17.07.08' },
                    { name: 'Pelabai', bpsCode: '17.07.09' },
                    { name: 'Amen', bpsCode: '17.07.10' },
                    { name: 'Uram Jaya', bpsCode: '17.07.11' },
                    { name: 'Pinang Belapis', bpsCode: '17.07.12' }
                ]
            }, {
                name: 'Kepahiang',
                bpscode: '17.08',
                districts: [
                    { name: 'Bermani Ilir', bpsCode: '17.08.01' },
                    { name: 'Ujan Mas', bpsCode: '17.08.02' },
                    { name: 'Tebat Karai', bpsCode: '17.08.03' },
                    { name: 'Kepahiang', bpsCode: '17.08.04' },
                    { name: 'Merigi', bpsCode: '17.08.05' },
                    { name: 'Kebawetan', bpsCode: '17.08.06' },
                    { name: 'Seberang Musi', bpsCode: '17.08.07' },
                    { name: 'Muara Kemumu', bpsCode: '17.08.08' }
                ]
            }, {
                name: 'Bengkulu Tengah',
                bpscode: '17.09',
                districts: [
                    { name: 'Karang Tinggi', bpsCode: '17.09.01' },
                    { name: 'Talang Empat', bpsCode: '17.09.02' },
                    { name: 'Pondok Kelapa', bpsCode: '17.09.03' },
                    { name: 'Pematang Tiga', bpsCode: '17.09.04' },
                    { name: 'Pagar Jati', bpsCode: '17.09.05' },
                    { name: 'Taba Penanjung', bpsCode: '17.09.06' },
                    { name: 'Merigi Kelindang', bpsCode: '17.09.07' },
                    { name: 'Merigi Sakti', bpsCode: '17.09.08' },
                    { name: 'Pondok Kubang', bpsCode: '17.09.09' },
                    { name: 'Bang Haji', bpsCode: '17.09.10' }
                ]
            }, {
                name: 'Bengkulu',
                bpscode: '17.71',
                districts: [
                    { name: 'Selebar', bpsCode: '17.71.01' },
                    { name: 'Gading Cempaka', bpsCode: '17.71.02' },
                    { name: 'Teluk Segara', bpsCode: '17.71.03' },
                    { name: 'Muara Bangka Hulu', bpsCode: '17.71.04' },
                    { name: 'Kampung Melayu', bpsCode: '17.71.05' },
                    { name: 'Ratu Agung', bpsCode: '17.71.06' },
                    { name: 'Ratu Samban', bpsCode: '17.71.07' },
                    { name: 'Sungai Serut', bpsCode: '17.71.08' },
                    { name: 'Singaran Pati', bpsCode: '17.71.09' }
                ]
            }
        ]
    },
    BT: {
        regencies: [
            {
                name: 'Pandeglang',
                bpscode: '36.01',
                districts: [
                    { name: 'Sumur', bpsCode: '36.01.01' },
                    { name: 'Cimanggu', bpsCode: '36.01.02' },
                    { name: 'Cibaliung', bpsCode: '36.01.03' },
                    { name: 'Cikeusik', bpsCode: '36.01.04' },
                    { name: 'Cigeulis', bpsCode: '36.01.05' },
                    { name: 'Panimbang', bpsCode: '36.01.06' },
                    { name: 'Angsana', bpsCode: '36.01.07' },
                    { name: 'Munjul', bpsCode: '36.01.08' },
                    { name: 'Pagelaran', bpsCode: '36.01.09' },
                    { name: 'Bojong', bpsCode: '36.01.10' },
                    { name: 'Picung', bpsCode: '36.01.11' },
                    { name: 'Labuan', bpsCode: '36.01.12' },
                    { name: 'Menes', bpsCode: '36.01.13' },
                    { name: 'Saketi', bpsCode: '36.01.14' },
                    { name: 'Cipeucang', bpsCode: '36.01.15' },
                    { name: 'Jiput', bpsCode: '36.01.16' },
                    { name: 'Mandalawangi', bpsCode: '36.01.17' },
                    { name: 'Cimanuk', bpsCode: '36.01.18' },
                    { name: 'Kaduhejo', bpsCode: '36.01.19' },
                    { name: 'Banjar', bpsCode: '36.01.20' },
                    { name: 'Pandeglang', bpsCode: '36.01.21' },
                    { name: 'Cadasari', bpsCode: '36.01.22' },
                    { name: 'Cisata', bpsCode: '36.01.23' },
                    { name: 'Patia', bpsCode: '36.01.24' },
                    { name: 'Karang Tanjung', bpsCode: '36.01.25' },
                    { name: 'Cikeudal (Cikedal)', bpsCode: '36.01.26' },
                    { name: 'Cibitung', bpsCode: '36.01.27' },
                    { name: 'Carita', bpsCode: '36.01.28' },
                    { name: 'Sukaresmi', bpsCode: '36.01.29' },
                    { name: 'Mekarjaya', bpsCode: '36.01.30' },
                    { name: 'Sindangresmi', bpsCode: '36.01.31' },
                    { name: 'Pulosari', bpsCode: '36.01.32' },
                    { name: 'Koroncong', bpsCode: '36.01.33' },
                    { name: 'Majasari', bpsCode: '36.01.34' },
                    { name: 'Sobang', bpsCode: '36.01.35' }
                ]
            }, {
                name: 'Lebak',
                bpscode: '36.02',
                districts: [
                    { name: 'Malingping', bpsCode: '36.02.01' },
                    { name: 'Panggarangan', bpsCode: '36.02.02' },
                    { name: 'Bayah', bpsCode: '36.02.03' },
                    { name: 'Cipanas', bpsCode: '36.02.04' },
                    { name: 'Muncang', bpsCode: '36.02.05' },
                    { name: 'Leuwidamar', bpsCode: '36.02.06' },
                    { name: 'Bojongmanik', bpsCode: '36.02.07' },
                    { name: 'Gunungkencana (Gunung Kencana)', bpsCode: '36.02.08' },
                    { name: 'Banjarsari', bpsCode: '36.02.09' },
                    { name: 'Cileles', bpsCode: '36.02.10' },
                    { name: 'Cimarga', bpsCode: '36.02.11' },
                    { name: 'Sajira', bpsCode: '36.02.12' },
                    { name: 'Maja', bpsCode: '36.02.13' },
                    { name: 'Rangkasbitung', bpsCode: '36.02.14' },
                    { name: 'Warunggunung', bpsCode: '36.02.15' },
                    { name: 'Cijaku', bpsCode: '36.02.16' },
                    { name: 'Cikulur', bpsCode: '36.02.17' },
                    { name: 'Cibadak', bpsCode: '36.02.18' },
                    { name: 'Cibeber', bpsCode: '36.02.19' },
                    { name: 'Cilograng', bpsCode: '36.02.20' },
                    { name: 'Wanasalam', bpsCode: '36.02.21' },
                    { name: 'Sobang', bpsCode: '36.02.22' },
                    { name: 'Curug bitung (Curugbitung)', bpsCode: '36.02.23' },
                    { name: 'Kalanganyar', bpsCode: '36.02.24' },
                    { name: 'Lebakgedong', bpsCode: '36.02.25' },
                    { name: 'Cihara', bpsCode: '36.02.26' },
                    { name: 'Cirinten', bpsCode: '36.02.27' },
                    { name: 'Cigemlong (Cigemblong)', bpsCode: '36.02.28' }
                ]
            }, {
                name: 'Tangerang',
                bpscode: '36.03',
                districts: [
                    { name: 'Balaraja', bpsCode: '36.03.01' },
                    { name: 'Jayanti', bpsCode: '36.03.02' },
                    { name: 'Tigaraksa', bpsCode: '36.03.03' },
                    { name: 'Jambe', bpsCode: '36.03.04' },
                    { name: 'Cisoka', bpsCode: '36.03.05' },
                    { name: 'Kresek', bpsCode: '36.03.06' },
                    { name: 'Kronjo', bpsCode: '36.03.07' },
                    { name: 'Mauk', bpsCode: '36.03.08' },
                    { name: 'Kemiri', bpsCode: '36.03.09' },
                    { name: 'Sukadiri', bpsCode: '36.03.10' },
                    { name: 'Rajeg', bpsCode: '36.03.11' },
                    { name: 'Pasar Kemis', bpsCode: '36.03.12' },
                    { name: 'Teluknaga', bpsCode: '36.03.13' },
                    { name: 'Kosambi', bpsCode: '36.03.14' },
                    { name: 'Pakuhaji', bpsCode: '36.03.15' },
                    { name: 'Sepatan', bpsCode: '36.03.16' },
                    { name: 'Curug', bpsCode: '36.03.17' },
                    { name: 'Cikupa', bpsCode: '36.03.18' },
                    { name: 'Panongan', bpsCode: '36.03.19' },
                    { name: 'Legok', bpsCode: '36.03.20' },
                    { name: 'Pagedangan', bpsCode: '36.03.22' },
                    { name: 'Cisauk', bpsCode: '36.03.23' },
                    { name: 'Sukamulya', bpsCode: '36.03.27' },
                    { name: 'Kelapa Dua', bpsCode: '36.03.28' },
                    { name: 'Sindang Jaya', bpsCode: '36.03.29' },
                    { name: 'Sepatan Timur', bpsCode: '36.03.30' },
                    { name: 'Solear', bpsCode: '36.03.31' },
                    { name: 'Gunung Kaler', bpsCode: '36.03.32' },
                    { name: 'Mekar Baru', bpsCode: '36.03.33' }
                ]
            }, {
                name: 'Serang',
                bpscode: '36.04',
                districts: [
                    { name: 'Kramatwatu', bpsCode: '36.04.05' },
                    { name: 'Waringinkurung (Waringin Kurung)', bpsCode: '36.04.06' },
                    { name: 'Bojonegara', bpsCode: '36.04.07' },
                    { name: 'Pulo Ampel', bpsCode: '36.04.08' },
                    { name: 'Ciruas', bpsCode: '36.04.09' },
                    { name: 'Kragilan', bpsCode: '36.04.11' },
                    { name: 'Pontang', bpsCode: '36.04.12' },
                    { name: 'Tirtayasa', bpsCode: '36.04.13' },
                    { name: 'Tanara', bpsCode: '36.04.14' },
                    { name: 'Cikande', bpsCode: '36.04.15' },
                    { name: 'Kibin', bpsCode: '36.04.16' },
                    { name: 'Carenang (Cerenang)', bpsCode: '36.04.17' },
                    { name: 'Binuang', bpsCode: '36.04.18' },
                    { name: 'Petir', bpsCode: '36.04.19' },
                    { name: 'Tunjung Teja', bpsCode: '36.04.20' },
                    { name: 'Baros', bpsCode: '36.04.22' },
                    { name: 'Cikeusal', bpsCode: '36.04.23' },
                    { name: 'Pamarayan', bpsCode: '36.04.24' },
                    { name: 'Kopo', bpsCode: '36.04.25' },
                    { name: 'Jawilan', bpsCode: '36.04.26' },
                    { name: 'Ciomas', bpsCode: '36.04.27' },
                    { name: 'Pabuaran', bpsCode: '36.04.28' },
                    { name: 'Padarincang', bpsCode: '36.04.29' },
                    { name: 'Anyar', bpsCode: '36.04.30' },
                    { name: 'Cinangka', bpsCode: '36.04.31' },
                    { name: 'Mancak', bpsCode: '36.04.32' },
                    { name: 'Gunung Sari (Gunungsari)', bpsCode: '36.04.33' },
                    { name: 'Bandung', bpsCode: '36.04.34' },
                    { name: 'Lebak Wangi', bpsCode: '36.04.35' }
                ]
            }, {
                name: 'Tangerang',
                bpscode: '36.71',
                districts: [
                    { name: 'Tangerang', bpsCode: '36.71.01' },
                    { name: 'Jatiuwung', bpsCode: '36.71.02' },
                    { name: 'Batuceper', bpsCode: '36.71.03' },
                    { name: 'Benda', bpsCode: '36.71.04' },
                    { name: 'Cipondoh', bpsCode: '36.71.05' },
                    { name: 'Ciledug', bpsCode: '36.71.06' },
                    { name: 'Karawaci', bpsCode: '36.71.07' },
                    { name: 'Periuk', bpsCode: '36.71.08' },
                    { name: 'Cibodas', bpsCode: '36.71.09' },
                    { name: 'Neglasari', bpsCode: '36.71.10' },
                    { name: 'Pinang (Penang)', bpsCode: '36.71.11' },
                    { name: 'Karang Tengah', bpsCode: '36.71.12' },
                    { name: 'Larangan', bpsCode: '36.71.13' }
                ]
            }, {
                name: 'Cilegon',
                bpscode: '36.72',
                districts: [
                    { name: 'Cibeber', bpsCode: '36.72.01' },
                    { name: 'Cilegon', bpsCode: '36.72.02' },
                    { name: 'Pulomerak', bpsCode: '36.72.03' },
                    { name: 'Ciwandan', bpsCode: '36.72.04' },
                    { name: 'Jombang', bpsCode: '36.72.05' },
                    { name: 'Gerogol', bpsCode: '36.72.06' },
                    { name: 'Purwakarta', bpsCode: '36.72.07' },
                    { name: 'Citangkil', bpsCode: '36.72.08' }
                ]
            }, {
                name: 'Serang',
                bpscode: '36.73',
                districts: [
                    { name: 'Serang', bpsCode: '36.73.01' },
                    { name: 'Kasemen', bpsCode: '36.73.02' },
                    { name: 'Walantaka', bpsCode: '36.73.03' },
                    { name: 'Curug', bpsCode: '36.73.04' },
                    { name: 'Cipocok Jaya', bpsCode: '36.73.05' },
                    { name: 'Taktakan', bpsCode: '36.73.06' }
                ]
            }, {
                name: 'Tangerang Selatan',
                bpscode: '36.74',
                districts: [
                    { name: 'Serpong', bpsCode: '36.74.01' },
                    { name: 'Serpong Utara', bpsCode: '36.74.02' },
                    { name: 'Pondok Aren', bpsCode: '36.74.03' },
                    { name: 'Ciputat', bpsCode: '36.74.04' },
                    { name: 'Ciputat Timur', bpsCode: '36.74.05' },
                    { name: 'Pamulang', bpsCode: '36.74.06' },
                    { name: 'Setu', bpsCode: '36.74.07' }
                ]
            }
        ]
    },
    GO: {
        regencies: [
            {
                name: 'Gorontalo',
                bpscode: '75.01',
                districts: [
                    { name: 'Limboto', bpsCode: '75.01.01' },
                    { name: 'Telaga', bpsCode: '75.01.02' },
                    { name: 'Batudaa', bpsCode: '75.01.03' },
                    { name: 'Tibawa', bpsCode: '75.01.04' },
                    { name: 'Batudaa Pantai', bpsCode: '75.01.05' },
                    { name: 'Boliohuto (Boliyohuto)', bpsCode: '75.01.09' },
                    { name: 'Telaga Biru', bpsCode: '75.01.10' },
                    { name: 'Bongomeme', bpsCode: '75.01.11' },
                    { name: 'Tolangohula', bpsCode: '75.01.13' },
                    { name: 'Mootilango', bpsCode: '75.01.14' },
                    { name: 'Pulubala', bpsCode: '75.01.16' },
                    { name: 'Limboto Barat', bpsCode: '75.01.17' },
                    { name: 'Tilango', bpsCode: '75.01.18' },
                    { name: 'Tabongo', bpsCode: '75.01.19' },
                    { name: 'Biluhu', bpsCode: '75.01.20' },
                    { name: 'Asparaga', bpsCode: '75.01.21' },
                    { name: 'Talaga Jaya (Telaga Jaya)', bpsCode: '75.01.22' },
                    { name: 'Bilato', bpsCode: '75.01.23' },
                    { name: 'Dungaliyo', bpsCode: '75.01.24' },
                ]
            }, {
                name: 'Boalemo',
                bpscode: '75.02',
                districts: [
                    { name: 'Paguyaman', bpsCode: '75.02.01' },
                    { name: 'Wonosari', bpsCode: '75.02.02' },
                    { name: 'Dulupi', bpsCode: '75.02.03' },
                    { name: 'Tilamuta', bpsCode: '75.02.04' },
                    { name: 'Mananggu', bpsCode: '75.02.05' },
                    { name: 'Botumoita', bpsCode: '75.02.06' },
                    { name: 'Paguyaman Pantai', bpsCode: '75.02.07' },
                ]
            }, {
                name: 'Bone Bolango',
                bpscode: '75.03',
                districts: [
                    { name: 'Tapa', bpsCode: '75.03.01' },
                    { name: 'Kabila', bpsCode: '75.03.02' },
                    { name: 'Suwawa', bpsCode: '75.03.03' },
                    { name: 'Bonepantai', bpsCode: '75.03.04' },
                    { name: 'Bulango Utara', bpsCode: '75.03.05' },
                    { name: 'Tilongkabila', bpsCode: '75.03.06' },
                    { name: 'Botupingge (Botu Pingge)', bpsCode: '75.03.07' },
                    { name: 'Kabila Bone', bpsCode: '75.03.08' },
                    { name: 'Bone', bpsCode: '75.03.09' },
                    { name: 'Bone Raya', bpsCode: '75.03.10' },
                    { name: 'Suwawa Timur', bpsCode: '75.03.11' },
                    { name: 'Suwawa Selatan', bpsCode: '75.03.12' },
                    { name: 'Suwawa Tengah', bpsCode: '75.03.13' },
                    { name: 'Bulango Ulu', bpsCode: '75.03.14' },
                    { name: 'Bulango Selatan', bpsCode: '75.03.15' },
                    { name: 'Bulango Timur', bpsCode: '75.03.16' },
                    { name: 'Bulawa', bpsCode: '75.03.17' },
                    { name: 'Pinogu', bpsCode: '75.03.18' },
                ]
            }, {
                name: 'Pohuwato',
                bpscode: '75.04',
                districts: [
                    { name: 'Popayato', bpsCode: '75.04.01' },
                    { name: 'Lemito', bpsCode: '75.04.02' },
                    { name: 'Randangan', bpsCode: '75.04.03' },
                    { name: 'Marisa', bpsCode: '75.04.04' },
                    { name: 'Paguat', bpsCode: '75.04.05' },
                    { name: 'Patilanggio', bpsCode: '75.04.06' },
                    { name: 'Taluditi (Taluduti)', bpsCode: '75.04.07' },
                    { name: 'Dengilo', bpsCode: '75.04.08' },
                    { name: 'Buntulia', bpsCode: '75.04.09' },
                    { name: 'Duhiadaa', bpsCode: '75.04.10' },
                    { name: 'Wanggarasi', bpsCode: '75.04.11' },
                    { name: 'Popayato Timur', bpsCode: '75.04.12' },
                    { name: 'Popayato Barat', bpsCode: '75.04.13' },
                ]
            }, {
                name: 'Gorontalo Utara',
                bpscode: '75.05',
                districts: [
                    { name: 'Atinggola', bpsCode: '75.05.01' },
                    { name: 'Kwandang', bpsCode: '75.05.02' },
                    { name: 'Anggrek', bpsCode: '75.05.03' },
                    { name: 'Sumalata', bpsCode: '75.05.04' },
                    { name: 'Tolinggula', bpsCode: '75.05.05' },
                    { name: 'Gentuma Raya', bpsCode: '75.05.06' },
                    { name: 'Tomolito', bpsCode: '75.05.07' },
                    { name: 'Ponelo Kepulauan', bpsCode: '75.05.08' },
                    { name: 'Monano', bpsCode: '75.05.09' },
                    { name: 'Biau', bpsCode: '75.05.10' },
                    { name: 'Sumalata Timur', bpsCode: '75.05.11' },
                ]
            }, {
                name: 'Gorontalo',
                bpscode: '75.71',
                districts: [
                    { name: 'Kota Barat', bpsCode: '75.71.01' },
                    { name: 'Kota Selatan', bpsCode: '75.71.02' },
                    { name: 'Kota Utara', bpsCode: '75.71.03' },
                    { name: 'Dungingi', bpsCode: '75.71.04' },
                    { name: 'Kota Timur', bpsCode: '75.71.05' },
                    { name: 'Kota Tengah', bpsCode: '75.71.06' },
                    { name: 'Sipatana', bpsCode: '75.71.07' },
                    { name: 'Dumbo Raya', bpsCode: '75.71.08' },
                    { name: 'Hulonthalangi', bpsCode: '75.71.09' }
                ]
            },
        ]
    },
    JA: {
        regencies: [
            {
                name: 'Kerinci',
                bpscode: '15.01',
                districts: [
                    { name: 'Gunung Raya', bpsCode: '15.01.01' },
                    { name: 'Danau Kerinci', bpsCode: '15.01.02' },
                    { name: 'Sitinjau Laut', bpsCode: '15.01.04' },
                    { name: 'Air Hangat', bpsCode: '15.01.05' },
                    { name: 'Gunung Kerinci', bpsCode: '15.01.06' },
                    { name: 'Batang Merangin', bpsCode: '15.01.07' },
                    { name: 'Keliling Danau', bpsCode: '15.01.08' },
                    { name: 'Kayu Aro', bpsCode: '15.01.09' },
                    { name: 'Air Hangat Timur', bpsCode: '15.01.11' },
                    { name: 'Gunung Tujuh', bpsCode: '15.01.15' },
                    { name: 'Siulak', bpsCode: '15.01.16' },
                    { name: 'Depati Tujuh', bpsCode: '15.01.17' },
                    { name: 'Siulak Mukai', bpsCode: '15.01.18' },
                    { name: 'Kayu Aro Barat', bpsCode: '15.01.19' },
                    { name: 'Bukitkerman', bpsCode: '15.01.20' },
                    { name: 'Air Hangat Barat', bpsCode: '15.01.21' }
                ]
            }, {
                name: 'Merangin',
                bpscode: '15.02',
                districts: [
                    { name: 'Jangkat', bpsCode: '15.02.01' },
                    { name: 'Bangko', bpsCode: '15.02.02' },
                    { name: 'Muara Siau', bpsCode: '15.02.03' },
                    { name: 'Sungai Manau', bpsCode: '15.02.04' },
                    { name: 'Tabir', bpsCode: '15.02.05' },
                    { name: 'Pamenang', bpsCode: '15.02.06' },
                    { name: 'Tabir Ulu', bpsCode: '15.02.07' },
                    { name: 'Tabir Selatan', bpsCode: '15.02.08' },
                    { name: 'Lembah Masurai', bpsCode: '15.02.09' },
                    { name: 'Bangko Barat', bpsCode: '15.02.10' },
                    { name: 'Nalo Tatan (Nalo Tantan)', bpsCode: '15.02.11' },
                    { name: 'Batang Masumai', bpsCode: '15.02.12' },
                    { name: 'Pamenang Barat', bpsCode: '15.02.13' },
                    { name: 'Tabir Ilir', bpsCode: '15.02.14' },
                    { name: 'Tabir Timur', bpsCode: '15.02.15' },
                    { name: 'Renah Pembarap', bpsCode: '15.02.16' },
                    { name: 'Pangkalan Jambu', bpsCode: '15.02.17' },
                    { name: 'Jangkat Timur (Sungai Tenang)', bpsCode: '15.02.18' },
                    { name: 'Renah Pamenang (Renah Pemenang)', bpsCode: '15.02.19' },
                    { name: 'Pamenang Selatan', bpsCode: '15.02.20' },
                    { name: 'Margo Tabir', bpsCode: '15.02.21' },
                    { name: 'Tabir Lintas', bpsCode: '15.02.22' },
                    { name: 'Tabir Barat', bpsCode: '15.02.23' },
                    { name: 'Tiang Pumpung', bpsCode: '15.02.24' }
                ]
            }, {
                name: 'Sarolangun',
                bpscode: '15.03',
                districts: [
                    { name: 'Batang Asai', bpsCode: '15.03.01' },
                    { name: 'Limun', bpsCode: '15.03.02' },
                    { name: 'Sarolangun', bpsCode: '15.03.03' },
                    { name: 'Pauh', bpsCode: '15.03.04' },
                    { name: 'Pelawan', bpsCode: '15.03.05' },
                    { name: 'Mandiangin', bpsCode: '15.03.06' },
                    { name: 'Air Hitam', bpsCode: '15.03.07' },
                    { name: 'Bathin VIII (Batin VIII)', bpsCode: '15.03.08' },
                    { name: 'Singkut', bpsCode: '15.03.09' },
                    { name: 'Cermin Nan Gedang / Gadang', bpsCode: '15.03.10' }
                ]
            }, {
                name: 'Batang Hari',
                bpscode: '15.04',
                districts: [
                    { name: 'Mersam', bpsCode: '15.04.01' },
                    { name: 'Muara Tembesi', bpsCode: '15.04.02' },
                    { name: 'Muara Bulian', bpsCode: '15.04.03' },
                    { name: 'Batin XXIV', bpsCode: '15.04.04' },
                    { name: 'Pemayung', bpsCode: '15.04.05' },
                    { name: 'Maro Sebo Ulu', bpsCode: '15.04.06' },
                    { name: 'Bajubang', bpsCode: '15.04.07' },
                    { name: 'Maro Sebo Ilir', bpsCode: '15.04.08' }
                ]
            }, {
                name: 'Muaro Jambi',
                bpscode: '15.05',
                districts: [
                    { name: 'Jambi Luar Kota', bpsCode: '15.05.01' },
                    { name: 'Sekernan', bpsCode: '15.05.02' },
                    { name: 'Kumpeh', bpsCode: '15.05.03' },
                    { name: 'Maro Sebo', bpsCode: '15.05.04' },
                    { name: 'Mestong', bpsCode: '15.05.05' },
                    { name: 'Kumpeh Ulu', bpsCode: '15.05.06' },
                    { name: 'Sungai Bahar', bpsCode: '15.05.07' },
                    { name: 'Sungai Gelam', bpsCode: '15.05.08' },
                    { name: 'Bahar Utara', bpsCode: '15.05.09' },
                    { name: 'Bahar Selatan', bpsCode: '15.05.10' },
                    { name: 'Taman Rajo', bpsCode: '15.05.11' }
                ]
            }, {
                name: 'Tanjung Jabung Barat',
                bpscode: '15.06',
                districts: [
                    { name: 'Tungkal Ulu', bpsCode: '15.06.01' },
                    { name: 'Tungkal Ilir', bpsCode: '15.06.02' },
                    { name: 'Pengabuan', bpsCode: '15.06.03' },
                    { name: 'Betara', bpsCode: '15.06.04' },
                    { name: 'Merlung', bpsCode: '15.06.05' },
                    { name: 'Tebing Tinggi', bpsCode: '15.06.06' },
                    { name: 'Batang Asam', bpsCode: '15.06.07' },
                    { name: 'Renah Mendaluh', bpsCode: '15.06.08' },
                    { name: 'Muara Papalik', bpsCode: '15.06.09' },
                    { name: 'Seberang Kota', bpsCode: '15.06.10' },
                    { name: 'Bram Itam', bpsCode: '15.06.11' },
                    { name: 'Kuala Betara', bpsCode: '15.06.12' },
                    { name: 'Senyerang', bpsCode: '15.06.13' }
                ]
            }, {
                name: 'Tanjung Jabung Timur',
                bpscode: '15.07',
                districts: [
                    { name: 'Muara Sabak Timur', bpsCode: '15.07.01' },
                    { name: 'Nipah Panjang', bpsCode: '15.07.02' },
                    { name: 'Mendahara', bpsCode: '15.07.03' },
                    { name: 'Rantau Rasau', bpsCode: '15.07.04' },
                    { name: 'Sadu', bpsCode: '15.07.05' },
                    { name: 'Dendang', bpsCode: '15.07.06' },
                    { name: 'Muara Sabak Barat', bpsCode: '15.07.07' },
                    { name: 'Kuala Jambi', bpsCode: '15.07.08' },
                    { name: 'Mendahara Ulu', bpsCode: '15.07.09' },
                    { name: 'Geragai', bpsCode: '15.07.10' },
                    { name: 'Berbak', bpsCode: '15.07.11' }
                ]
            }, {
                name: 'Bungo',
                bpscode: '15.08',
                districts: [
                    { name: 'Tanah Tumbuh', bpsCode: '15.08.01' },
                    { name: 'Rantau Pandan', bpsCode: '15.08.02' },
                    { name: 'Pasar Muaro Bungo (Pasar Muara Bungo)', bpsCode: '15.08.03' },
                    { name: 'Jujuhan', bpsCode: '15.08.04' },
                    { name: 'Tanah Sepenggal', bpsCode: '15.08.05' },
                    { name: 'Pelepat', bpsCode: '15.08.06' },
                    { name: 'Limbur Lubuk Mengkuang', bpsCode: '15.08.07' },
                    { name: 'Muko-muko Bathin / Batin VII', bpsCode: '15.08.08' },
                    { name: 'Pelepat Ilir', bpsCode: '15.08.09' },
                    { name: 'Bathin / Batin II Babeko', bpsCode: '15.08.10' },
                    { name: 'Bathin III', bpsCode: '15.08.11' },
                    { name: 'Bungo Dani', bpsCode: '15.08.12' },
                    { name: 'Rimbo Tengah', bpsCode: '15.08.13' },
                    { name: 'Bathin III Ulu', bpsCode: '15.08.14' },
                    { name: 'Bathin II Pelayang', bpsCode: '15.08.15' },
                    { name: 'Jujuhan Ilir', bpsCode: '15.08.16' },
                    { name: 'Tanah Sepenggal Lintas', bpsCode: '15.08.17' }
                ]
            }, {
                name: 'Tebo',
                bpscode: '15.09',
                districts: [
                    { name: 'Tebo Tengah', bpsCode: '15.09.01' },
                    { name: 'Tebo Ilir', bpsCode: '15.09.02' },
                    { name: 'Tebo Ulu', bpsCode: '15.09.03' },
                    { name: 'Rimbo Bujang', bpsCode: '15.09.04' },
                    { name: 'Sumay', bpsCode: '15.09.05' },
                    { name: 'VII Koto', bpsCode: '15.09.06' },
                    { name: 'Rimbo Ulu', bpsCode: '15.09.07' },
                    { name: 'Rimbo Ilir', bpsCode: '15.09.08' },
                    { name: 'Tengah Ilir', bpsCode: '15.09.09' },
                    { name: 'Serai Serumpun', bpsCode: '15.09.10' },
                    { name: 'VII Koto Ilir', bpsCode: '15.09.11' },
                    { name: 'Muara Tabir', bpsCode: '15.09.12' }
                ]
            }, {
                name: 'Jambi',
                bpscode: '15.71',
                districts: [
                    { name: 'Telanaipura', bpsCode: '15.71.01' },
                    { name: 'Jambi Selatan', bpsCode: '15.71.02' },
                    { name: 'Jambi Timur', bpsCode: '15.71.03' },
                    { name: 'Pasar Jambi', bpsCode: '15.71.04' },
                    { name: 'Pelayangan', bpsCode: '15.71.05' },
                    { name: 'Danau Teluk', bpsCode: '15.71.06' },
                    { name: 'Kota Baru', bpsCode: '15.71.07' },
                    { name: 'Jelutung', bpsCode: '15.71.08' },
                    { name: 'Alam Barajo', bpsCode: '15.71.09' },
                    { name: 'Danau Sipin', bpsCode: '15.71.10' },
                    { name: 'Paal Merah', bpsCode: '15.71.11' }
                ]
            }, {
                name: 'Sungaipenuh',
                bpscode: '15.72',
                districts: [
                    { name: 'Sungai Penuh', bpsCode: '15.72.01' },
                    { name: 'Pesisir Bukit', bpsCode: '15.72.02' },
                    { name: 'Hamparan Rawang', bpsCode: '15.72.03' },
                    { name: 'Tanah Kampung', bpsCode: '15.72.04' },
                    { name: 'Kumun Debai', bpsCode: '15.72.05' },
                    { name: 'Pondok Tinggi', bpsCode: '15.72.06' },
                    { name: 'Koto Baru', bpsCode: '15.72.07' },
                    { name: 'Sungai Bungkal', bpsCode: '15.72.08' }
                ]
            }
        ]
    },
    JB: {
        regencies: [
            {
                name: 'Bogor',
                bpscode: '32.01',
                districts: [
                    { name: 'Cibinong', bpsCode: '32.01.01' },
                    { name: 'Gunung Putri', bpsCode: '32.01.02' },
                    { name: 'Citeureup', bpsCode: '32.01.03' },
                    { name: 'Sukaraja', bpsCode: '32.01.04' },
                    { name: 'Babakan Madang', bpsCode: '32.01.05' },
                    { name: 'Jonggol', bpsCode: '32.01.06' },
                    { name: 'Cileungsi', bpsCode: '32.01.07' },
                    { name: 'Cariu', bpsCode: '32.01.08' },
                    { name: 'Sukamakmur', bpsCode: '32.01.09' },
                    { name: 'Parung', bpsCode: '32.01.10' },
                    { name: 'Gunung Sindur', bpsCode: '32.01.11' },
                    { name: 'Kemang', bpsCode: '32.01.12' },
                    { name: 'Bojong Gede (Bojonggede)', bpsCode: '32.01.13' },
                    { name: 'Leuwiliang', bpsCode: '32.01.14' },
                    { name: 'Ciampea', bpsCode: '32.01.15' },
                    { name: 'Cibungbulang', bpsCode: '32.01.16' },
                    { name: 'Pamijahan', bpsCode: '32.01.17' },
                    { name: 'Rumpin', bpsCode: '32.01.18' },
                    { name: 'Jasinga', bpsCode: '32.01.19' },
                    { name: 'Parung Panjang', bpsCode: '32.01.20' },
                    { name: 'Nanggung', bpsCode: '32.01.21' },
                    { name: 'Cigudeg', bpsCode: '32.01.22' },
                    { name: 'Tenjo', bpsCode: '32.01.23' },
                    { name: 'Ciawi', bpsCode: '32.01.24' },
                    { name: 'Cisarua', bpsCode: '32.01.25' },
                    { name: 'Megamendung', bpsCode: '32.01.26' },
                    { name: 'Caringin', bpsCode: '32.01.27' },
                    { name: 'Cijeruk', bpsCode: '32.01.28' },
                    { name: 'Ciomas', bpsCode: '32.01.29' },
                    { name: 'Dramaga', bpsCode: '32.01.30' },
                    { name: 'Tamansari', bpsCode: '32.01.31' },
                    { name: 'Klapanunggal', bpsCode: '32.01.32' },
                    { name: 'Ciseeng', bpsCode: '32.01.33' },
                    { name: 'Ranca Bungur', bpsCode: '32.01.34' },
                    { name: 'Sukajaya', bpsCode: '32.01.35' },
                    { name: 'Tanjungsari', bpsCode: '32.01.36' },
                    { name: 'Tajurhalang', bpsCode: '32.01.37' },
                    { name: 'Cigombong', bpsCode: '32.01.38' },
                    { name: 'Leuwisadeng', bpsCode: '32.01.39' },
                    { name: 'Tenjolaya', bpsCode: '32.01.40' }
                ]
            }, {
                name: 'Sukabumi',
                bpscode: '32.02',
                districts: [
                    { name: 'Palabuhanratu (Pelabuhanratu)', bpsCode: '32.02.01' },
                    { name: 'Simpenan', bpsCode: '32.02.02' },
                    { name: 'Cikakak', bpsCode: '32.02.03' },
                    { name: 'Bantargadung', bpsCode: '32.02.04' },
                    { name: 'Cisolok', bpsCode: '32.02.05' },
                    { name: 'Cikidang', bpsCode: '32.02.06' },
                    { name: 'Lengkong', bpsCode: '32.02.07' },
                    { name: 'Jampangtengah (Jampang Tengah)', bpsCode: '32.02.08' },
                    { name: 'Warungkiara', bpsCode: '32.02.09' },
                    { name: 'Cikembar', bpsCode: '32.02.10' },
                    { name: 'Cibadak', bpsCode: '32.02.11' },
                    { name: 'Nagrak', bpsCode: '32.02.12' },
                    { name: 'Parungkuda (Parung Kuda)', bpsCode: '32.02.13' },
                    { name: 'Bojonggenteng (Bojong Genteng)', bpsCode: '32.02.14' },
                    { name: 'Parakansalak (Parakan Salak)', bpsCode: '32.02.15' },
                    { name: 'Cicurug', bpsCode: '32.02.16' },
                    { name: 'Cidahu', bpsCode: '32.02.17' },
                    { name: 'Kalapanunggal (Kalapa Nunggal)', bpsCode: '32.02.18' },
                    { name: 'Kabandungan', bpsCode: '32.02.19' },
                    { name: 'Waluran', bpsCode: '32.02.20' },
                    { name: 'Jampangkulon (Jampang Kulon)', bpsCode: '32.02.21' },
                    { name: 'Ciemas', bpsCode: '32.02.22' },
                    { name: 'Kalibunder', bpsCode: '32.02.23' },
                    { name: 'Surade', bpsCode: '32.02.24' },
                    { name: 'Cibitung', bpsCode: '32.02.25' },
                    { name: 'Ciracap', bpsCode: '32.02.26' },
                    { name: 'Gunungguruh', bpsCode: '32.02.27' },
                    { name: 'Cicantayan', bpsCode: '32.02.28' },
                    { name: 'Cisaat', bpsCode: '32.02.29' },
                    { name: 'Kadudampit', bpsCode: '32.02.30' },
                    { name: 'Caringin', bpsCode: '32.02.31' },
                    { name: 'Sukabumi', bpsCode: '32.02.32' },
                    { name: 'Sukaraja', bpsCode: '32.02.33' },
                    { name: 'Kebonpedes', bpsCode: '32.02.34' },
                    { name: 'Cireunghas', bpsCode: '32.02.35' },
                    { name: 'Sukalarang', bpsCode: '32.02.36' },
                    { name: 'Pabuaran', bpsCode: '32.02.37' },
                    { name: 'Purabaya', bpsCode: '32.02.38' },
                    { name: 'Nyalindung', bpsCode: '32.02.39' },
                    { name: 'Gegerbitung (Geger Bitung)', bpsCode: '32.02.40' },
                    { name: 'Sagaranten', bpsCode: '32.02.41' },
                    { name: 'Curugkembar', bpsCode: '32.02.42' },
                    { name: 'Cidolog', bpsCode: '32.02.43' },
                    { name: 'Cidadap', bpsCode: '32.02.44' },
                    { name: 'Tegalbuleud', bpsCode: '32.02.45' },
                    { name: 'Cimanggu', bpsCode: '32.02.46' },
                    { name: 'Ciambar', bpsCode: '32.02.47' }
                ]
            }, {
                name: 'Cianjur',
                bpscode: '32.03',
                districts: [
                    { name: 'Cianjur', bpsCode: '32.03.01' },
                    { name: 'Warungkondang', bpsCode: '32.03.02' },
                    { name: 'Cibeber', bpsCode: '32.03.03' },
                    { name: 'Cilaku', bpsCode: '32.03.04' },
                    { name: 'Ciranjang', bpsCode: '32.03.05' },
                    { name: 'Bojongpicung', bpsCode: '32.03.06' },
                    { name: 'Karangtengah', bpsCode: '32.03.07' },
                    { name: 'Mande', bpsCode: '32.03.08' },
                    { name: 'Sukaluyu', bpsCode: '32.03.09' },
                    { name: 'Pacet', bpsCode: '32.03.10' },
                    { name: 'Cugenang', bpsCode: '32.03.11' },
                    { name: 'Cikalongkulon', bpsCode: '32.03.12' },
                    { name: 'Sukaresmi', bpsCode: '32.03.13' },
                    { name: 'Sukanagara', bpsCode: '32.03.14' },
                    { name: 'Campaka', bpsCode: '32.03.15' },
                    { name: 'Takokak', bpsCode: '32.03.16' },
                    { name: 'Kadupandak', bpsCode: '32.03.17' },
                    { name: 'Pagelaran', bpsCode: '32.03.18' },
                    { name: 'Tanggeung', bpsCode: '32.03.19' },
                    { name: 'Cibinong', bpsCode: '32.03.20' },
                    { name: 'Sindangbarang', bpsCode: '32.03.21' },
                    { name: 'Agrabinta', bpsCode: '32.03.22' },
                    { name: 'Cidaun', bpsCode: '32.03.23' },
                    { name: 'Naringgul', bpsCode: '32.03.24' },
                    { name: 'Campakamulya (Campaka Mulya)', bpsCode: '32.03.25' },
                    { name: 'Cikadu', bpsCode: '32.03.26' },
                    { name: 'Gekbrong', bpsCode: '32.03.27' },
                    { name: 'Cipanas', bpsCode: '32.03.28' },
                    { name: 'Cijati', bpsCode: '32.03.29' },
                    { name: 'Leles', bpsCode: '32.03.30' },
                    { name: 'Haurwangi', bpsCode: '32.03.31' },
                    { name: 'Pasirkuda', bpsCode: '32.03.32' }
                ]
            }, {
                name: 'Bandung',
                bpscode: '32.04',
                districts: [
                    { name: 'Cileunyi', bpsCode: '32.04.05' },
                    { name: 'Cimenyan (Cimeunyan)', bpsCode: '32.04.06' },
                    { name: 'Cilengkrang', bpsCode: '32.04.07' },
                    { name: 'Bojongsoang', bpsCode: '32.04.08' },
                    { name: 'Margahayu', bpsCode: '32.04.09' },
                    { name: 'Margaasih', bpsCode: '32.04.10' },
                    { name: 'Katapang', bpsCode: '32.04.11' },
                    { name: 'Dayeuhkolot', bpsCode: '32.04.12' },
                    { name: 'Banjaran', bpsCode: '32.04.13' },
                    { name: 'Pameungpeuk', bpsCode: '32.04.14' },
                    { name: 'Pangalengan', bpsCode: '32.04.15' },
                    { name: 'Arjasari', bpsCode: '32.04.16' },
                    { name: 'Cimaung', bpsCode: '32.04.17' },
                    { name: 'Cicalengka', bpsCode: '32.04.25' },
                    { name: 'Nagreg', bpsCode: '32.04.26' },
                    { name: 'Cikancung', bpsCode: '32.04.27' },
                    { name: 'Rancaekek', bpsCode: '32.04.28' },
                    { name: 'Ciparay', bpsCode: '32.04.29' },
                    { name: 'Pacet', bpsCode: '32.04.30' },
                    { name: 'Kertasari', bpsCode: '32.04.31' },
                    { name: 'Baleendah', bpsCode: '32.04.32' },
                    { name: 'Majalaya', bpsCode: '32.04.33' },
                    { name: 'Solokanjeruk (Solokan Jeruk)', bpsCode: '32.04.34' },
                    { name: 'Paseh', bpsCode: '32.04.35' },
                    { name: 'Ibun', bpsCode: '32.04.36' },
                    { name: 'Soreang', bpsCode: '32.04.37' },
                    { name: 'Pasirjambu', bpsCode: '32.04.38' },
                    { name: 'Ciwidey', bpsCode: '32.04.39' },
                    { name: 'Rancabali (Ranca Bali)', bpsCode: '32.04.40' },
                    { name: 'Cangkuang', bpsCode: '32.04.44' },
                    { name: 'Kutawaringin', bpsCode: '32.04.46' }
                ]
            }, {
                name: 'Garut',
                bpscode: '32.05',
                districts: [
                    { name: 'Garut Kota', bpsCode: '32.05.01' },
                    { name: 'Karangpawitan', bpsCode: '32.05.02' },
                    { name: 'Wanaraja', bpsCode: '32.05.03' },
                    { name: 'Tarogong Kaler', bpsCode: '32.05.04' },
                    { name: 'Tarogong Kidul', bpsCode: '32.05.05' },
                    { name: 'Banyuresmi', bpsCode: '32.05.06' },
                    { name: 'Samarang', bpsCode: '32.05.07' },
                    { name: 'Pasirwangi', bpsCode: '32.05.08' },
                    { name: 'Leles', bpsCode: '32.05.09' },
                    { name: 'Kadungora', bpsCode: '32.05.10' },
                    { name: 'Leuwigoong', bpsCode: '32.05.11' },
                    { name: 'Cibatu', bpsCode: '32.05.12' },
                    { name: 'Kersamanah', bpsCode: '32.05.13' },
                    { name: 'Malangbong', bpsCode: '32.05.14' },
                    { name: 'Sukawening', bpsCode: '32.05.15' },
                    { name: 'Karangtengah', bpsCode: '32.05.16' },
                    { name: 'Bayongbong', bpsCode: '32.05.17' },
                    { name: 'Cigedug', bpsCode: '32.05.18' },
                    { name: 'Cilawu', bpsCode: '32.05.19' },
                    { name: 'Cisurupan', bpsCode: '32.05.20' },
                    { name: 'Sukaresmi', bpsCode: '32.05.21' },
                    { name: 'Cikajang', bpsCode: '32.05.22' },
                    { name: 'Banjarwangi', bpsCode: '32.05.23' },
                    { name: 'Singajaya', bpsCode: '32.05.24' },
                    { name: 'Cihurip', bpsCode: '32.05.25' },
                    { name: 'Peundeuy', bpsCode: '32.05.26' },
                    { name: 'Pameungpeuk', bpsCode: '32.05.27' },
                    { name: 'Cisompet', bpsCode: '32.05.28' },
                    { name: 'Cibalong', bpsCode: '32.05.29' },
                    { name: 'Cikelet', bpsCode: '32.05.30' },
                    { name: 'Bungbulang', bpsCode: '32.05.31' },
                    { name: 'Mekarmukti', bpsCode: '32.05.32' },
                    { name: 'Pakenjeng', bpsCode: '32.05.33' },
                    { name: 'Pamulihan', bpsCode: '32.05.34' },
                    { name: 'Cisewu', bpsCode: '32.05.35' },
                    { name: 'Caringin', bpsCode: '32.05.36' },
                    { name: 'Talegong', bpsCode: '32.05.37' },
                    { name: 'Blubur Limbangan', bpsCode: '32.05.38' },
                    { name: 'Selaawi', bpsCode: '32.05.39' },
                    { name: 'Cibiuk', bpsCode: '32.05.40' },
                    { name: 'Pangatikan', bpsCode: '32.05.41' },
                    { name: 'Sucinaraja', bpsCode: '32.05.42' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.06',
                districts: [
                    { name: 'Cipatujah', bpsCode: '32.06.01' },
                    { name: 'Karangnunggal', bpsCode: '32.06.02' },
                    { name: 'Cikalong', bpsCode: '32.06.03' },
                    { name: 'Pancatengah', bpsCode: '32.06.04' },
                    { name: 'Cikatomas', bpsCode: '32.06.05' },
                    { name: 'Cibalong', bpsCode: '32.06.06' },
                    { name: 'Parungponteng', bpsCode: '32.06.07' },
                    { name: 'Bantarkalong', bpsCode: '32.06.08' },
                    { name: 'Bojongasih', bpsCode: '32.06.09' },
                    { name: 'Culamega', bpsCode: '32.06.10' },
                    { name: 'Bojonggambir', bpsCode: '32.06.11' },
                    { name: 'Sodonghilir', bpsCode: '32.06.12' },
                    { name: 'Taraju', bpsCode: '32.06.13' },
                    { name: 'Salawu', bpsCode: '32.06.14' },
                    { name: 'Puspahiang', bpsCode: '32.06.15' },
                    { name: 'Tanjungjaya', bpsCode: '32.06.16' },
                    { name: 'Sukaraja', bpsCode: '32.06.17' },
                    { name: 'Salopa', bpsCode: '32.06.18' },
                    { name: 'Jatiwaras', bpsCode: '32.06.19' },
                    { name: 'Cineam', bpsCode: '32.06.20' },
                    { name: 'Karang Jaya', bpsCode: '32.06.21' },
                    { name: 'Manonjaya', bpsCode: '32.06.22' },
                    { name: 'Gunung Tanjung', bpsCode: '32.06.23' },
                    { name: 'Singaparna', bpsCode: '32.06.24' },
                    { name: 'Mangunreja', bpsCode: '32.06.25' },
                    { name: 'Sukarame', bpsCode: '32.06.26' },
                    { name: 'Cigalontang', bpsCode: '32.06.27' },
                    { name: 'Leuwisari', bpsCode: '32.06.28' },
                    { name: 'Padakembang', bpsCode: '32.06.29' },
                    { name: 'Sariwangi', bpsCode: '32.06.30' },
                    { name: 'Sukaratu', bpsCode: '32.06.31' },
                    { name: 'Cisayong', bpsCode: '32.06.32' },
                    { name: 'Sukahening', bpsCode: '32.06.33' },
                    { name: 'Rajapolah', bpsCode: '32.06.34' },
                    { name: 'Jamanis', bpsCode: '32.06.35' },
                    { name: 'Ciawi', bpsCode: '32.06.36' },
                    { name: 'Kadipaten', bpsCode: '32.06.37' },
                    { name: 'Pagerageung', bpsCode: '32.06.38' },
                    { name: 'Sukaresik', bpsCode: '32.06.39' }
                ]
            }, {
                name: 'Ciamis',
                bpscode: '32.07',
                districts: [
                    { name: 'Ciamis', bpsCode: '32.07.01' },
                    { name: 'Cikoneng', bpsCode: '32.07.02' },
                    { name: 'Cijeungjing', bpsCode: '32.07.03' },
                    { name: 'Sadananya', bpsCode: '32.07.04' },
                    { name: 'Cidolog', bpsCode: '32.07.05' },
                    { name: 'Cihaurbeuti', bpsCode: '32.07.06' },
                    { name: 'Panumbangan', bpsCode: '32.07.07' },
                    { name: 'Panjalu', bpsCode: '32.07.08' },
                    { name: 'Kawali', bpsCode: '32.07.09' },
                    { name: 'Panawangan', bpsCode: '32.07.10' },
                    { name: 'Cipaku', bpsCode: '32.07.11' },
                    { name: 'Jatinagara', bpsCode: '32.07.12' },
                    { name: 'Rajadesa', bpsCode: '32.07.13' },
                    { name: 'Sukadana', bpsCode: '32.07.14' },
                    { name: 'Rancah', bpsCode: '32.07.15' },
                    { name: 'Tambaksari', bpsCode: '32.07.16' },
                    { name: 'Lakbok', bpsCode: '32.07.17' },
                    { name: 'Banjarsari', bpsCode: '32.07.18' },
                    { name: 'Pamarican', bpsCode: '32.07.19' },
                    { name: 'Cimaragas', bpsCode: '32.07.29' },
                    { name: 'Cisaga', bpsCode: '32.07.30' },
                    { name: 'Sindangkasih', bpsCode: '32.07.31' },
                    { name: 'Baregbeg', bpsCode: '32.07.32' },
                    { name: 'Sukamantri', bpsCode: '32.07.33' },
                    { name: 'Lumbung', bpsCode: '32.07.34' },
                    { name: 'Purwadadi', bpsCode: '32.07.35' },
                    { name: 'Banjaranyar', bpsCode: '32.07.37' }
                ]
            }, {
                name: 'Kuningan',
                bpscode: '32.08',
                districts: [
                    { name: 'Kadugede', bpsCode: '32.08.01' },
                    { name: 'Ciniru', bpsCode: '32.08.02' },
                    { name: 'Subang', bpsCode: '32.08.03' },
                    { name: 'Ciwaru', bpsCode: '32.08.04' },
                    { name: 'Cibingbin', bpsCode: '32.08.05' },
                    { name: 'Luragung', bpsCode: '32.08.06' },
                    { name: 'Lebakwangi', bpsCode: '32.08.07' },
                    { name: 'Garawangi', bpsCode: '32.08.08' },
                    { name: 'Kuningan', bpsCode: '32.08.09' },
                    { name: 'Ciawigebang', bpsCode: '32.08.10' },
                    { name: 'Cidahu', bpsCode: '32.08.11' },
                    { name: 'Jalaksana', bpsCode: '32.08.12' },
                    { name: 'Cilimus', bpsCode: '32.08.13' },
                    { name: 'Mandirancan', bpsCode: '32.08.14' },
                    { name: 'Selajambe', bpsCode: '32.08.15' },
                    { name: 'Kramatmulya (Kramat Mulya)', bpsCode: '32.08.16' },
                    { name: 'Darma', bpsCode: '32.08.17' },
                    { name: 'Cigugur', bpsCode: '32.08.18' },
                    { name: 'Pasawahan', bpsCode: '32.08.19' },
                    { name: 'Nusaherang', bpsCode: '32.08.20' },
                    { name: 'Cipicung', bpsCode: '32.08.21' },
                    { name: 'Pancalang', bpsCode: '32.08.22' },
                    { name: 'Japara', bpsCode: '32.08.23' },
                    { name: 'Cimahi', bpsCode: '32.08.24' },
                    { name: 'Cilebak', bpsCode: '32.08.25' },
                    { name: 'Hantara', bpsCode: '32.08.26' },
                    { name: 'Kalimanggis', bpsCode: '32.08.27' },
                    { name: 'Cibeureum', bpsCode: '32.08.28' },
                    { name: 'Karang Kancana (Karangkancana)', bpsCode: '32.08.29' },
                    { name: 'Maleber', bpsCode: '32.08.30' },
                    { name: 'Sindang Agung (Sindangagung)', bpsCode: '32.08.31' },
                    { name: 'Cigandamekar', bpsCode: '32.08.32' }
                ]
            }, {
                name: 'Cirebon',
                bpscode: '32.09',
                districts: [
                    { name: 'Waled', bpsCode: '32.09.01' },
                    { name: 'Ciledug', bpsCode: '32.09.02' },
                    { name: 'Losari', bpsCode: '32.09.03' },
                    { name: 'Pabedilan', bpsCode: '32.09.04' },
                    { name: 'Babakan', bpsCode: '32.09.05' },
                    { name: 'Karangsembung', bpsCode: '32.09.06' },
                    { name: 'Lemahabang', bpsCode: '32.09.07' },
                    { name: 'Susukan Lebak', bpsCode: '32.09.08' },
                    { name: 'Sedong', bpsCode: '32.09.09' },
                    { name: 'Astanajapura', bpsCode: '32.09.10' },
                    { name: 'Pangenan', bpsCode: '32.09.11' },
                    { name: 'Mundu', bpsCode: '32.09.12' },
                    { name: 'Beber', bpsCode: '32.09.13' },
                    { name: 'Talun (Cirebon Selatan)', bpsCode: '32.09.14' },
                    { name: 'Sumber', bpsCode: '32.09.15' },
                    { name: 'Dukupuntang', bpsCode: '32.09.16' },
                    { name: 'Palimanan', bpsCode: '32.09.17' },
                    { name: 'Plumbon', bpsCode: '32.09.18' },
                    { name: 'Weru', bpsCode: '32.09.19' },
                    { name: 'Kedawung', bpsCode: '32.09.20' },
                    { name: 'Gunung Jati (Cirebon Utara)', bpsCode: '32.09.21' },
                    { name: 'Kapetakan', bpsCode: '32.09.22' },
                    { name: 'Klangenan', bpsCode: '32.09.23' },
                    { name: 'Arjawinangun', bpsCode: '32.09.24' },
                    { name: 'Panguragan', bpsCode: '32.09.25' },
                    { name: 'Ciwaringin', bpsCode: '32.09.26' },
                    { name: 'Susukan', bpsCode: '32.09.27' },
                    { name: 'Gegesik', bpsCode: '32.09.28' },
                    { name: 'Kaliwedi', bpsCode: '32.09.29' },
                    { name: 'Gebang', bpsCode: '32.09.30' },
                    { name: 'Depok', bpsCode: '32.09.31' },
                    { name: 'Pasaleman', bpsCode: '32.09.32' },
                    { name: 'Pabuaran', bpsCode: '32.09.33' },
                    { name: 'Karangwareng', bpsCode: '32.09.34' },
                    { name: 'Tengah Tani', bpsCode: '32.09.35' },
                    { name: 'Plered', bpsCode: '32.09.36' },
                    { name: 'Gempol', bpsCode: '32.09.37' },
                    { name: 'Greged (Greget)', bpsCode: '32.09.38' },
                    { name: 'Suranenggala', bpsCode: '32.09.39' },
                    { name: 'Jamblang', bpsCode: '32.09.40' }
                ]
            }, {
                name: 'Majalengka',
                bpscode: '32.10',
                districts: [
                    { name: 'Lemahsugih', bpsCode: '32.10.01' },
                    { name: 'Bantarujeg', bpsCode: '32.10.02' },
                    { name: 'Cikijing', bpsCode: '32.10.03' },
                    { name: 'Talaga', bpsCode: '32.10.04' },
                    { name: 'Argapura', bpsCode: '32.10.05' },
                    { name: 'Maja', bpsCode: '32.10.06' },
                    { name: 'Majalengka', bpsCode: '32.10.07' },
                    { name: 'Sukahaji', bpsCode: '32.10.08' },
                    { name: 'Rajagaluh', bpsCode: '32.10.09' },
                    { name: 'Leuwimunding', bpsCode: '32.10.10' },
                    { name: 'Jatiwangi', bpsCode: '32.10.11' },
                    { name: 'Dawuan', bpsCode: '32.10.12' },
                    { name: 'Kadipaten', bpsCode: '32.10.13' },
                    { name: 'Kertajati', bpsCode: '32.10.14' },
                    { name: 'Jatitujuh', bpsCode: '32.10.15' },
                    { name: 'Ligung', bpsCode: '32.10.16' },
                    { name: 'Sumberjaya', bpsCode: '32.10.17' },
                    { name: 'Panyingkiran', bpsCode: '32.10.18' },
                    { name: 'Palasah', bpsCode: '32.10.19' },
                    { name: 'Cigasong', bpsCode: '32.10.20' },
                    { name: 'Sindangwangi', bpsCode: '32.10.21' },
                    { name: 'Banjaran', bpsCode: '32.10.22' },
                    { name: 'Cingambul', bpsCode: '32.10.23' },
                    { name: 'Kasokandel', bpsCode: '32.10.24' },
                    { name: 'Sindang', bpsCode: '32.10.25' },
                    { name: 'Malausma', bpsCode: '32.10.26' }
                ]
            }, {
                name: 'Sumedang',
                bpscode: '32.11',
                districts: [
                    { name: 'Wado', bpsCode: '32.11.01' },
                    { name: 'Jatinunggal', bpsCode: '32.11.02' },
                    { name: 'Darmaraja', bpsCode: '32.11.03' },
                    { name: 'Cibugel', bpsCode: '32.11.04' },
                    { name: 'Cisitu', bpsCode: '32.11.05' },
                    { name: 'Situraja', bpsCode: '32.11.06' },
                    { name: 'Conggeang', bpsCode: '32.11.07' },
                    { name: 'Paseh', bpsCode: '32.11.08' },
                    { name: 'Surian', bpsCode: '32.11.09' },
                    { name: 'Buahdua', bpsCode: '32.11.10' },
                    { name: 'Tanjungsari', bpsCode: '32.11.11' },
                    { name: 'Sukasari', bpsCode: '32.11.12' },
                    { name: 'Pamulihan', bpsCode: '32.11.13' },
                    { name: 'Cimanggung', bpsCode: '32.11.14' },
                    { name: 'Jatinangor', bpsCode: '32.11.15' },
                    { name: 'Rancakalong', bpsCode: '32.11.16' },
                    { name: 'Sumedang Selatan', bpsCode: '32.11.17' },
                    { name: 'Sumedang Utara', bpsCode: '32.11.18' },
                    { name: 'Ganeas', bpsCode: '32.11.19' },
                    { name: 'Tanjungkerta', bpsCode: '32.11.20' },
                    { name: 'Tanjungmedar', bpsCode: '32.11.21' },
                    { name: 'Cimalaka', bpsCode: '32.11.22' },
                    { name: 'Cisarua', bpsCode: '32.11.23' },
                    { name: 'Tomo', bpsCode: '32.11.24' },
                    { name: 'Ujungjaya', bpsCode: '32.11.25' },
                    { name: 'Jatigede', bpsCode: '32.11.26' }
                ]
            }, {
                name: 'Indramayu',
                bpscode: '32.12',
                districts: [
                    { name: 'Haurgeulis', bpsCode: '32.12.01' },
                    { name: 'Kroya', bpsCode: '32.12.02' },
                    { name: 'Gabuswetan', bpsCode: '32.12.03' },
                    { name: 'Cikedung', bpsCode: '32.12.04' },
                    { name: 'Lelea', bpsCode: '32.12.05' },
                    { name: 'Bangodua', bpsCode: '32.12.06' },
                    { name: 'Widasari', bpsCode: '32.12.07' },
                    { name: 'Kertasemaya', bpsCode: '32.12.08' },
                    { name: 'Krangkeng', bpsCode: '32.12.09' },
                    { name: 'Karangampel', bpsCode: '32.12.10' },
                    { name: 'Juntinyuat', bpsCode: '32.12.11' },
                    { name: 'Sliyeg', bpsCode: '32.12.12' },
                    { name: 'Jatibarang', bpsCode: '32.12.13' },
                    { name: 'Balongan', bpsCode: '32.12.14' },
                    { name: 'Indramayu', bpsCode: '32.12.15' },
                    { name: 'Sindang', bpsCode: '32.12.16' },
                    { name: 'Cantigi', bpsCode: '32.12.17' },
                    { name: 'Lohbener', bpsCode: '32.12.18' },
                    { name: 'Arahan', bpsCode: '32.12.19' },
                    { name: 'Losarang', bpsCode: '32.12.20' },
                    { name: 'Kandanghaur', bpsCode: '32.12.21' },
                    { name: 'Bongas', bpsCode: '32.12.22' },
                    { name: 'Anjatan', bpsCode: '32.12.23' },
                    { name: 'Sukra', bpsCode: '32.12.24' },
                    { name: 'Gantar', bpsCode: '32.12.25' },
                    { name: 'Trisi/Terisi', bpsCode: '32.12.26' },
                    { name: 'Sukagumiwang', bpsCode: '32.12.27' },
                    { name: 'Kedokan Bunder', bpsCode: '32.12.28' },
                    { name: 'Pasekan', bpsCode: '32.12.29' },
                    { name: 'Tukdana', bpsCode: '32.12.30' },
                    { name: 'Patrol', bpsCode: '32.12.31' }
                ]
            }, {
                name: 'Subang',
                bpscode: '32.13',
                districts: [
                    { name: 'Sagalaherang', bpsCode: '32.13.01' },
                    { name: 'Cisalak', bpsCode: '32.13.02' },
                    { name: 'Subang', bpsCode: '32.13.03' },
                    { name: 'Kalijati', bpsCode: '32.13.04' },
                    { name: 'Pabuaran', bpsCode: '32.13.05' },
                    { name: 'Purwadadi', bpsCode: '32.13.06' },
                    { name: 'Pagaden', bpsCode: '32.13.07' },
                    { name: 'Binong', bpsCode: '32.13.08' },
                    { name: 'Ciasem', bpsCode: '32.13.09' },
                    { name: 'Pusakanagara', bpsCode: '32.13.10' },
                    { name: 'Pamanukan', bpsCode: '32.13.11' },
                    { name: 'Jalancagak', bpsCode: '32.13.12' },
                    { name: 'Blanakan', bpsCode: '32.13.13' },
                    { name: 'Tanjungsiang', bpsCode: '32.13.14' },
                    { name: 'Compreng', bpsCode: '32.13.15' },
                    { name: 'Patokbeusi', bpsCode: '32.13.16' },
                    { name: 'Cibogo', bpsCode: '32.13.17' },
                    { name: 'Cipunagara', bpsCode: '32.13.18' },
                    { name: 'Cijambe', bpsCode: '32.13.19' },
                    { name: 'Cipeundeuy', bpsCode: '32.13.20' },
                    { name: 'Legonkulon', bpsCode: '32.13.21' },
                    { name: 'Cikaum', bpsCode: '32.13.22' },
                    { name: 'Serangpanjang', bpsCode: '32.13.23' },
                    { name: 'Sukasari', bpsCode: '32.13.24' },
                    { name: 'Tambakdahan', bpsCode: '32.13.25' },
                    { name: 'Kasomalang', bpsCode: '32.13.26' },
                    { name: 'Dawuan', bpsCode: '32.13.27' },
                    { name: 'Pagaden Barat', bpsCode: '32.13.28' },
                    { name: 'Ciater', bpsCode: '32.13.29' },
                    { name: 'Pusakajaya', bpsCode: '32.13.30' }
                ]
            }, {
                name: 'Purwakarta',
                bpscode: '32.14',
                districts: [
                    { name: 'Purwakarta', bpsCode: '32.14.01' },
                    { name: 'Campaka', bpsCode: '32.14.02' },
                    { name: 'Jatiluhur', bpsCode: '32.14.03' },
                    { name: 'Plered', bpsCode: '32.14.04' },
                    { name: 'Sukatani', bpsCode: '32.14.05' },
                    { name: 'Darangdan', bpsCode: '32.14.06' },
                    { name: 'Maniis', bpsCode: '32.14.07' },
                    { name: 'Tegalwaru (Tegal Waru)', bpsCode: '32.14.08' },
                    { name: 'Wanayasa', bpsCode: '32.14.09' },
                    { name: 'Pasawahan', bpsCode: '32.14.10' },
                    { name: 'Bojong', bpsCode: '32.14.11' },
                    { name: 'Babakancikao', bpsCode: '32.14.12' },
                    { name: 'Bungursari', bpsCode: '32.14.13' },
                    { name: 'Cibatu', bpsCode: '32.14.14' },
                    { name: 'Sukasari', bpsCode: '32.14.15' },
                    { name: 'Pondoksalam', bpsCode: '32.14.16' },
                    { name: 'Kiarapedes', bpsCode: '32.14.17' }
                ]
            }, {
                name: 'Karawang',
                bpscode: '32.15',
                districts: [
                    { name: 'Karawang Barat', bpsCode: '32.15.01' },
                    { name: 'Pangkalan', bpsCode: '32.15.02' },
                    { name: 'Telukjambe Timur', bpsCode: '32.15.03' },
                    { name: 'Ciampel', bpsCode: '32.15.04' },
                    { name: 'Klari', bpsCode: '32.15.05' },
                    { name: 'Rengasdengklok', bpsCode: '32.15.06' },
                    { name: 'Kutawaluya', bpsCode: '32.15.07' },
                    { name: 'Batujaya', bpsCode: '32.15.08' },
                    { name: 'Tirtajaya', bpsCode: '32.15.09' },
                    { name: 'Pedes', bpsCode: '32.15.10' },
                    { name: 'Cibuaya', bpsCode: '32.15.11' },
                    { name: 'Pakisjaya', bpsCode: '32.15.12' },
                    { name: 'Cikampek', bpsCode: '32.15.13' },
                    { name: 'Jatisari', bpsCode: '32.15.14' },
                    { name: 'Cilamaya Wetan', bpsCode: '32.15.15' },
                    { name: 'Tirtamulya', bpsCode: '32.15.16' },
                    { name: 'Telagasari (Talagasari)', bpsCode: '32.15.17' },
                    { name: 'Rawamerta', bpsCode: '32.15.18' },
                    { name: 'Lemahabang', bpsCode: '32.15.19' },
                    { name: 'Tempuran', bpsCode: '32.15.20' },
                    { name: 'Majalaya', bpsCode: '32.15.21' },
                    { name: 'Jayakerta', bpsCode: '32.15.22' },
                    { name: 'Cilamaya Kulon', bpsCode: '32.15.23' },
                    { name: 'Banyusari', bpsCode: '32.15.24' },
                    { name: 'Kota Baru (Kotabaru)', bpsCode: '32.15.25' },
                    { name: 'Karawang Timur', bpsCode: '32.15.26' },
                    { name: 'Telukjambe Barat', bpsCode: '32.15.27' },
                    { name: 'Tegalwaru', bpsCode: '32.15.28' },
                    { name: 'Purwasari', bpsCode: '32.15.29' },
                    { name: 'Cilebar', bpsCode: '32.15.30' }
                ]
            }, {
                name: 'Bekasi',
                bpscode: '32.16',
                districts: [
                    { name: 'Tarumajaya', bpsCode: '32.16.01' },
                    { name: 'Babelan', bpsCode: '32.16.02' },
                    { name: 'Sukawangi', bpsCode: '32.16.03' },
                    { name: 'Tambelang', bpsCode: '32.16.04' },
                    { name: 'Tambun Utara', bpsCode: '32.16.05' },
                    { name: 'Tambun Selatan', bpsCode: '32.16.06' },
                    { name: 'Cibitung', bpsCode: '32.16.07' },
                    { name: 'Cikarang Barat', bpsCode: '32.16.08' },
                    { name: 'Cikarang Utara', bpsCode: '32.16.09' },
                    { name: 'Karang Bahagia (Karangbahagia)', bpsCode: '32.16.10' },
                    { name: 'Cikarang Timur', bpsCode: '32.16.11' },
                    { name: 'Kedung Waringin', bpsCode: '32.16.12' },
                    { name: 'Pebayuran', bpsCode: '32.16.13' },
                    { name: 'Sukakarya', bpsCode: '32.16.14' },
                    { name: 'Sukatani', bpsCode: '32.16.15' },
                    { name: 'Cabangbungin', bpsCode: '32.16.16' },
                    { name: 'Muaragembong (Muara Gembong)', bpsCode: '32.16.17' },
                    { name: 'Setu', bpsCode: '32.16.18' },
                    { name: 'Cikarang Selatan', bpsCode: '32.16.19' },
                    { name: 'Cikarang Pusat', bpsCode: '32.16.20' },
                    { name: 'Serang Baru', bpsCode: '32.16.21' },
                    { name: 'Cibarusah', bpsCode: '32.16.22' },
                    { name: 'Bojongmangu', bpsCode: '32.16.23' }
                ]
            }, {
                name: 'Bandung Barat',
                bpscode: '32.17',
                districts: [
                    { name: 'Lembang', bpsCode: '32.17.01' },
                    { name: 'Parongpong', bpsCode: '32.17.02' },
                    { name: 'Cisarua', bpsCode: '32.17.03' },
                    { name: 'Cikalongwetan (Cikalong Wetan)', bpsCode: '32.17.04' },
                    { name: 'Cipeundeuy', bpsCode: '32.17.05' },
                    { name: 'Ngamprah', bpsCode: '32.17.06' },
                    { name: 'Cipatat', bpsCode: '32.17.07' },
                    { name: 'Padalarang', bpsCode: '32.17.08' },
                    { name: 'Batujajar', bpsCode: '32.17.09' },
                    { name: 'Cihampelas', bpsCode: '32.17.10' },
                    { name: 'Cililin', bpsCode: '32.17.11' },
                    { name: 'Cipongkor', bpsCode: '32.17.12' },
                    { name: 'Rongga', bpsCode: '32.17.13' },
                    { name: 'Sindangkerta', bpsCode: '32.17.14' },
                    { name: 'Gununghalu', bpsCode: '32.17.15' },
                    { name: 'Saguling', bpsCode: '32.17.16' }
                ]
            }, {
                name: 'Pangandaran',
                bpscode: '32.18',
                districts: [
                    { name: 'Parigi', bpsCode: '32.18.01' },
                    { name: 'Cijulang', bpsCode: '32.18.02' },
                    { name: 'Cimerak', bpsCode: '32.18.03' },
                    { name: 'Cigugur', bpsCode: '32.18.04' },
                    { name: 'Langkaplancar', bpsCode: '32.18.05' },
                    { name: 'Mangunjaya', bpsCode: '32.18.06' },
                    { name: 'Padaherang', bpsCode: '32.18.07' },
                    { name: 'Kalipucang', bpsCode: '32.18.08' },
                    { name: 'Pangandaran', bpsCode: '32.18.09' },
                    { name: 'Sidamulih', bpsCode: '32.18.10' }
                ]
            }, {
                name: 'Bogor',
                bpscode: '32.71',
                districts: [
                    { name: 'Bogor Selatan', bpsCode: '32.71.01' },
                    { name: 'Bogor Timur', bpsCode: '32.71.02' },
                    { name: 'Bogor Tengah', bpsCode: '32.71.03' },
                    { name: 'Bogor Barat', bpsCode: '32.71.04' },
                    { name: 'Bogor Utara', bpsCode: '32.71.05' },
                    { name: 'Tanah Sareal (Tanah Sereal)', bpsCode: '32.71.06' }
                ]
            }, {
                name: 'Sukabumi',
                bpscode: '32.72',
                districts: [
                    { name: 'Gunungpuyuh (Gunung Puyuh)', bpsCode: '32.72.01' },
                    { name: 'Cikole', bpsCode: '32.72.02' },
                    { name: 'Citamiang', bpsCode: '32.72.03' },
                    { name: 'Warudoyong', bpsCode: '32.72.04' },
                    { name: 'Baros', bpsCode: '32.72.05' },
                    { name: 'Lembursitu', bpsCode: '32.72.06' },
                    { name: 'Cibeureum', bpsCode: '32.72.07' }
                ]
            }, {
                name: 'Bandung',
                bpscode: '32.73',
                districts: [
                    { name: 'Sukasari', bpsCode: '32.73.01' },
                    { name: 'Coblong', bpsCode: '32.73.02' },
                    { name: 'Babakan Ciparay', bpsCode: '32.73.03' },
                    { name: 'Bojongloa Kaler', bpsCode: '32.73.04' },
                    { name: 'Andir', bpsCode: '32.73.05' },
                    { name: 'Cicendo', bpsCode: '32.73.06' },
                    { name: 'Sukajadi', bpsCode: '32.73.07' },
                    { name: 'Cidadap', bpsCode: '32.73.08' },
                    { name: 'Bandung Wetan', bpsCode: '32.73.09' },
                    { name: 'Astana Anyar', bpsCode: '32.73.10' },
                    { name: 'Regol', bpsCode: '32.73.11' },
                    { name: 'Batununggal', bpsCode: '32.73.12' },
                    { name: 'Lengkong', bpsCode: '32.73.13' },
                    { name: 'Cibeunying Kidul', bpsCode: '32.73.14' },
                    { name: 'Bandung Kulon', bpsCode: '32.73.15' },
                    { name: 'Kiaracondong', bpsCode: '32.73.16' },
                    { name: 'Bojongloa Kidul', bpsCode: '32.73.17' },
                    { name: 'Cibeunying Kaler', bpsCode: '32.73.18' },
                    { name: 'Sumur Bandung', bpsCode: '32.73.19' },
                    { name: 'Antapani (Cicadas)', bpsCode: '32.73.20' },
                    { name: 'Bandung Kidul', bpsCode: '32.73.21' },
                    { name: 'Buahbatu (Margacinta)', bpsCode: '32.73.22' },
                    { name: 'Rancasari', bpsCode: '32.73.23' },
                    { name: 'Arcamanik', bpsCode: '32.73.24' },
                    { name: 'Cibiru', bpsCode: '32.73.25' },
                    { name: 'Ujungberung (Ujung Berung)', bpsCode: '32.73.26' },
                    { name: 'Gedebage', bpsCode: '32.73.27' },
                    { name: 'Panyileukan', bpsCode: '32.73.28' },
                    { name: 'Cinambo', bpsCode: '32.73.29' },
                    { name: 'Mandalajati', bpsCode: '32.73.30' }
                ]
            }, {
                name: 'Cirebon',
                bpscode: '32.74',
                districts: [
                    { name: 'Kejaksan', bpsCode: '32.74.01' },
                    { name: 'Lemah Wungkuk (Lemahwungkuk)', bpsCode: '32.74.02' },
                    { name: 'Harjamukti', bpsCode: '32.74.03' },
                    { name: 'Pekalipan', bpsCode: '32.74.04' },
                    { name: 'Kesambi', bpsCode: '32.74.05' }
                ]
            }, {
                name: 'Bekasi',
                bpscode: '32.75',
                districts: [
                    { name: 'Bekasi Timur', bpsCode: '32.75.01' },
                    { name: 'Bekasi Barat', bpsCode: '32.75.02' },
                    { name: 'Bekasi Utara', bpsCode: '32.75.03' },
                    { name: 'Bekasi Selatan', bpsCode: '32.75.04' },
                    { name: 'Rawalumbu', bpsCode: '32.75.05' },
                    { name: 'Medansatria (Medan Satria)', bpsCode: '32.75.06' },
                    { name: 'Bantargebang (Bantar Gebang)', bpsCode: '32.75.07' },
                    { name: 'Pondokgede (Pondok Gede)', bpsCode: '32.75.08' },
                    { name: 'Jatiasih', bpsCode: '32.75.09' },
                    { name: 'Jatisampurna (Jati Sampurna)', bpsCode: '32.75.10' },
                    { name: 'Mustikajaya (Mustika Jaya)', bpsCode: '32.75.11' },
                    { name: 'Pondokmelati (Pondok Melati)', bpsCode: '32.75.12' }
                ]
            }, {
                name: 'Depok',
                bpscode: '32.76',
                districts: [
                    { name: 'Pancoran Mas', bpsCode: '32.76.01' },
                    { name: 'Cimanggis', bpsCode: '32.76.02' },
                    { name: 'Sawangan', bpsCode: '32.76.03' },
                    { name: 'Limo', bpsCode: '32.76.04' },
                    { name: 'Sukmajaya', bpsCode: '32.76.05' },
                    { name: 'Beji', bpsCode: '32.76.06' },
                    { name: 'Cipayung', bpsCode: '32.76.07' },
                    { name: 'Cilodong', bpsCode: '32.76.08' },
                    { name: 'Cinere', bpsCode: '32.76.09' },
                    { name: 'Tapos', bpsCode: '32.76.10' },
                    { name: 'Bojongsari', bpsCode: '32.76.11' }
                ]
            }, {
                name: 'Cimahi',
                bpscode: '32.77',
                districts: [
                    { name: 'Cimahi Selatan', bpsCode: '32.77.01' },
                    { name: 'Cimahi Tengah', bpsCode: '32.77.02' },
                    { name: 'Cimahi Utara', bpsCode: '32.77.03' }
                ]
            }, {
                name: 'Tasikmalaya',
                bpscode: '32.78',
                districts: [
                    { name: 'Cihideung', bpsCode: '32.78.01' },
                    { name: 'Cipedes', bpsCode: '32.78.02' },
                    { name: 'Tawang', bpsCode: '32.78.03' },
                    { name: 'Indihiang', bpsCode: '32.78.04' },
                    { name: 'Kawalu', bpsCode: '32.78.05' },
                    { name: 'Cibeureum', bpsCode: '32.78.06' },
                    { name: 'Tamansari', bpsCode: '32.78.07' },
                    { name: 'Mangkubumi', bpsCode: '32.78.08' },
                    { name: 'Bungursari', bpsCode: '32.78.09' },
                    { name: 'Purbaratu', bpsCode: '32.78.10' }
                ]
            }, {
                name: 'Banjar',
                bpscode: '32.79',
                districts: [
                    { name: 'Banjar', bpsCode: '32.79.01' },
                    { name: 'Pataruman', bpsCode: '32.79.02' },
                    { name: 'Purwaharja', bpsCode: '32.79.03' },
                    { name: 'Langensari', bpsCode: '32.79.04' }
                ]
            }
        ]
    },
    JI: {
        regencies: [
            {
                name: 'Pacitan',
                bpscode: '35.01',
                districts: [
                    { name: 'Donorojo', bpsCode: '35.01.01' },
                    { name: 'Pringkuku', bpsCode: '35.01.02' },
                    { name: 'Punung', bpsCode: '35.01.03' },
                    { name: 'Pacitan', bpsCode: '35.01.04' },
                    { name: 'Kebonagung (Kebon Agung)', bpsCode: '35.01.05' },
                    { name: 'Arjosari', bpsCode: '35.01.06' },
                    { name: 'Nawangan', bpsCode: '35.01.07' },
                    { name: 'Bandar', bpsCode: '35.01.08' },
                    { name: 'Tegalombo', bpsCode: '35.01.09' },
                    { name: 'Tulakan', bpsCode: '35.01.10' },
                    { name: 'Ngadirojo', bpsCode: '35.01.11' },
                    { name: 'Sudimoro', bpsCode: '35.01.12' }
                ]
            }, {
                name: 'Ponorogo',
                bpscode: '35.02',
                districts: [
                    { name: 'Slahung', bpsCode: '35.02.01' },
                    { name: 'Ngrayun', bpsCode: '35.02.02' },
                    { name: 'Bungkal', bpsCode: '35.02.03' },
                    { name: 'Sambit', bpsCode: '35.02.04' },
                    { name: 'Sawoo', bpsCode: '35.02.05' },
                    { name: 'Sooko', bpsCode: '35.02.06' },
                    { name: 'Pulung', bpsCode: '35.02.07' },
                    { name: 'Mlarak', bpsCode: '35.02.08' },
                    { name: 'Jetis', bpsCode: '35.02.09' },
                    { name: 'Siman', bpsCode: '35.02.10' },
                    { name: 'Balong', bpsCode: '35.02.11' },
                    { name: 'Kauman', bpsCode: '35.02.12' },
                    { name: 'Badegan', bpsCode: '35.02.13' },
                    { name: 'Sampung', bpsCode: '35.02.14' },
                    { name: 'Sukorejo', bpsCode: '35.02.15' },
                    { name: 'Babadan', bpsCode: '35.02.16' },
                    { name: 'Ponorogo', bpsCode: '35.02.17' },
                    { name: 'Jenangan', bpsCode: '35.02.18' },
                    { name: 'Ngebel', bpsCode: '35.02.19' },
                    { name: 'Jambon', bpsCode: '35.02.20' },
                    { name: 'Pudak', bpsCode: '35.02.21' }
                ]
            }, {
                name: 'Trenggalek',
                bpscode: '35.03',
                districts: [
                    { name: 'Panggul', bpsCode: '35.03.01' },
                    { name: 'Munjungan', bpsCode: '35.03.02' },
                    { name: 'Pule', bpsCode: '35.03.03' },
                    { name: 'Dongko', bpsCode: '35.03.04' },
                    { name: 'Tugu', bpsCode: '35.03.05' },
                    { name: 'Karangan', bpsCode: '35.03.06' },
                    { name: 'Kampak', bpsCode: '35.03.07' },
                    { name: 'Watulimo', bpsCode: '35.03.08' },
                    { name: 'Bendungan', bpsCode: '35.03.09' },
                    { name: 'Gandusari', bpsCode: '35.03.10' },
                    { name: 'Trenggalek', bpsCode: '35.03.11' },
                    { name: 'Pogalan', bpsCode: '35.03.12' },
                    { name: 'Durenan', bpsCode: '35.03.13' },
                    { name: 'Suruh', bpsCode: '35.03.14' }
                ]
            }, {
                name: 'Tulungagung',
                bpscode: '35.04',
                districts: [
                    { name: 'Tulungagung', bpsCode: '35.04.01' },
                    { name: 'Boyolangu', bpsCode: '35.04.02' },
                    { name: 'Kedungwaru', bpsCode: '35.04.03' },
                    { name: 'Ngantru', bpsCode: '35.04.04' },
                    { name: 'Kauman', bpsCode: '35.04.05' },
                    { name: 'Pagerwojo', bpsCode: '35.04.06' },
                    { name: 'Sendang', bpsCode: '35.04.07' },
                    { name: 'Karangrejo (Karang Rejo)', bpsCode: '35.04.08' },
                    { name: 'Gondang', bpsCode: '35.04.09' },
                    { name: 'Sumbergempol', bpsCode: '35.04.10' },
                    { name: 'Ngunut', bpsCode: '35.04.11' },
                    { name: 'Pucanglaban', bpsCode: '35.04.12' },
                    { name: 'Rejotangan', bpsCode: '35.04.13' },
                    { name: 'Kalidawir', bpsCode: '35.04.14' },
                    { name: 'Besuki', bpsCode: '35.04.15' },
                    { name: 'Campurdarat (Campur Darat)', bpsCode: '35.04.16' },
                    { name: 'Bandung', bpsCode: '35.04.17' },
                    { name: 'Pakel', bpsCode: '35.04.18' },
                    { name: 'Tanggunggunung (Tanggung Gunung)', bpsCode: '35.04.19' }
                ]
            }, {
                name: 'Blitar',
                bpscode: '35.05',
                districts: [
                    { name: 'Wonodadi', bpsCode: '35.05.01' },
                    { name: 'Udanawu', bpsCode: '35.05.02' },
                    { name: 'Srengat', bpsCode: '35.05.03' },
                    { name: 'Kademangan', bpsCode: '35.05.04' },
                    { name: 'Bakung', bpsCode: '35.05.05' },
                    { name: 'Ponggok', bpsCode: '35.05.06' },
                    { name: 'Sanankulon (Sanan Kulon)', bpsCode: '35.05.07' },
                    { name: 'Wonotirto', bpsCode: '35.05.08' },
                    { name: 'Nglegok', bpsCode: '35.05.09' },
                    { name: 'Kanigoro', bpsCode: '35.05.10' },
                    { name: 'Garum', bpsCode: '35.05.11' },
                    { name: 'Sutojayan', bpsCode: '35.05.12' },
                    { name: 'Panggungrejo', bpsCode: '35.05.13' },
                    { name: 'Talun', bpsCode: '35.05.14' },
                    { name: 'Gandusari', bpsCode: '35.05.15' },
                    { name: 'Binangun', bpsCode: '35.05.16' },
                    { name: 'Wlingi', bpsCode: '35.05.17' },
                    { name: 'Doko', bpsCode: '35.05.18' },
                    { name: 'Kesamben', bpsCode: '35.05.19' },
                    { name: 'Wates', bpsCode: '35.05.20' },
                    { name: 'Selorejo', bpsCode: '35.05.21' },
                    { name: 'Selopuro', bpsCode: '35.05.22' }
                ]
            }, {
                name: 'Kediri',
                bpscode: '35.06',
                districts: [
                    { name: 'Semen', bpsCode: '35.06.01' },
                    { name: 'Mojo', bpsCode: '35.06.02' },
                    { name: 'Kras', bpsCode: '35.06.03' },
                    { name: 'Ngadiluwih', bpsCode: '35.06.04' },
                    { name: 'Kandat', bpsCode: '35.06.05' },
                    { name: 'Wates', bpsCode: '35.06.06' },
                    { name: 'Ngancar', bpsCode: '35.06.07' },
                    { name: 'Puncu', bpsCode: '35.06.08' },
                    { name: 'Plosoklaten', bpsCode: '35.06.09' },
                    { name: 'Gurah', bpsCode: '35.06.10' },
                    { name: 'Pagu', bpsCode: '35.06.11' },
                    { name: 'Gampengrejo', bpsCode: '35.06.12' },
                    { name: 'Grogol', bpsCode: '35.06.13' },
                    { name: 'Papar', bpsCode: '35.06.14' },
                    { name: 'Purwoasri', bpsCode: '35.06.15' },
                    { name: 'Plemahan', bpsCode: '35.06.16' },
                    { name: 'Pare', bpsCode: '35.06.17' },
                    { name: 'Kepung', bpsCode: '35.06.18' },
                    { name: 'Kandangan', bpsCode: '35.06.19' },
                    { name: 'Tarokan', bpsCode: '35.06.20' },
                    { name: 'Kunjang', bpsCode: '35.06.21' },
                    { name: 'Banyakan', bpsCode: '35.06.22' },
                    { name: 'Ringinrejo', bpsCode: '35.06.23' },
                    { name: 'Kayen Kidul', bpsCode: '35.06.24' },
                    { name: 'Ngasem', bpsCode: '35.06.25' },
                    { name: 'Badas', bpsCode: '35.06.26' }
                ]
            }, {
                name: 'Malang',
                bpscode: '35.07',
                districts: [
                    { name: 'Donomulyo', bpsCode: '35.07.01' },
                    { name: 'Pagak', bpsCode: '35.07.02' },
                    { name: 'Bantur', bpsCode: '35.07.03' },
                    { name: 'Sumbermanjing Wetan', bpsCode: '35.07.04' },
                    { name: 'Dampit', bpsCode: '35.07.05' },
                    { name: 'Ampelgading', bpsCode: '35.07.06' },
                    { name: 'Poncokusumo', bpsCode: '35.07.07' },
                    { name: 'Wajak', bpsCode: '35.07.08' },
                    { name: 'Turen', bpsCode: '35.07.09' },
                    { name: 'Gondanglegi', bpsCode: '35.07.10' },
                    { name: 'Kalipare', bpsCode: '35.07.11' },
                    { name: 'Sumberpucung', bpsCode: '35.07.12' },
                    { name: 'Kepanjen', bpsCode: '35.07.13' },
                    { name: 'Bululawang', bpsCode: '35.07.14' },
                    { name: 'Tajinan', bpsCode: '35.07.15' },
                    { name: 'Tumpang', bpsCode: '35.07.16' },
                    { name: 'Jabung', bpsCode: '35.07.17' },
                    { name: 'Pakis', bpsCode: '35.07.18' },
                    { name: 'Pakisaji', bpsCode: '35.07.19' },
                    { name: 'Ngajung (Ngajum)', bpsCode: '35.07.20' },
                    { name: 'Wagir', bpsCode: '35.07.21' },
                    { name: 'Dau', bpsCode: '35.07.22' },
                    { name: 'Karang Ploso (Karangploso)', bpsCode: '35.07.23' },
                    { name: 'Singosari', bpsCode: '35.07.24' },
                    { name: 'Lawang', bpsCode: '35.07.25' },
                    { name: 'Pujon', bpsCode: '35.07.26' },
                    { name: 'Ngantang', bpsCode: '35.07.27' },
                    { name: 'Kasembon', bpsCode: '35.07.28' },
                    { name: 'Gedangan', bpsCode: '35.07.29' },
                    { name: 'Tirtoyudo', bpsCode: '35.07.30' },
                    { name: 'Kromengan', bpsCode: '35.07.31' },
                    { name: 'Wonosari', bpsCode: '35.07.32' },
                    { name: 'Pagelaran', bpsCode: '35.07.33' }
                ]
            }, {
                name: 'Lumajang',
                bpscode: '35.08',
                districts: [
                    { name: 'Tempursari', bpsCode: '35.08.01' },
                    { name: 'Pronojiwo', bpsCode: '35.08.02' },
                    { name: 'Candipuro', bpsCode: '35.08.03' },
                    { name: 'Pasirian', bpsCode: '35.08.04' },
                    { name: 'Tempeh', bpsCode: '35.08.05' },
                    { name: 'Kunir', bpsCode: '35.08.06' },
                    { name: 'Yosowilangun', bpsCode: '35.08.07' },
                    { name: 'Rowokangkung', bpsCode: '35.08.08' },
                    { name: 'Tekung', bpsCode: '35.08.09' },
                    { name: 'Lumajang', bpsCode: '35.08.10' },
                    { name: 'Pasrujambe/Pasujambe', bpsCode: '35.08.11' },
                    { name: 'Senduro', bpsCode: '35.08.12' },
                    { name: 'Gucialit', bpsCode: '35.08.13' },
                    { name: 'Padang', bpsCode: '35.08.14' },
                    { name: 'Sukodono', bpsCode: '35.08.15' },
                    { name: 'Kedungjajang', bpsCode: '35.08.16' },
                    { name: 'Jatiroto', bpsCode: '35.08.17' },
                    { name: 'Randuagung', bpsCode: '35.08.18' },
                    { name: 'Klakah', bpsCode: '35.08.19' },
                    { name: 'Ranuyoso', bpsCode: '35.08.20' },
                    { name: 'Sumbersuko', bpsCode: '35.08.21' }
                ]
            }, {
                name: 'Jember',
                bpscode: '35.09',
                districts: [
                    { name: 'Jombang', bpsCode: '35.09.01' },
                    { name: 'Kencong', bpsCode: '35.09.02' },
                    { name: 'Sumberbaru (Sumber Baru)', bpsCode: '35.09.03' },
                    { name: 'Gumukmas (Gumuk Mas)', bpsCode: '35.09.04' },
                    { name: 'Umbulsari', bpsCode: '35.09.05' },
                    { name: 'Tanggul', bpsCode: '35.09.06' },
                    { name: 'Semboro', bpsCode: '35.09.07' },
                    { name: 'Puger', bpsCode: '35.09.08' },
                    { name: 'Bangsalsari', bpsCode: '35.09.09' },
                    { name: 'Balung', bpsCode: '35.09.10' },
                    { name: 'Wuluhan', bpsCode: '35.09.11' },
                    { name: 'Ambulu', bpsCode: '35.09.12' },
                    { name: 'Rambipuji', bpsCode: '35.09.13' },
                    { name: 'Panti', bpsCode: '35.09.14' },
                    { name: 'Sukorambi', bpsCode: '35.09.15' },
                    { name: 'Jenggawah', bpsCode: '35.09.16' },
                    { name: 'Ajung', bpsCode: '35.09.17' },
                    { name: 'Tempurejo', bpsCode: '35.09.18' },
                    { name: 'Kaliwates', bpsCode: '35.09.19' },
                    { name: 'Patrang', bpsCode: '35.09.20' },
                    { name: 'Sumbersari (Sumber Sari)', bpsCode: '35.09.21' },
                    { name: 'Arjasa', bpsCode: '35.09.22' },
                    { name: 'Mumbulsari', bpsCode: '35.09.23' },
                    { name: 'Pakusari', bpsCode: '35.09.24' },
                    { name: 'Jelbuk', bpsCode: '35.09.25' },
                    { name: 'Mayang', bpsCode: '35.09.26' },
                    { name: 'Kalisat', bpsCode: '35.09.27' },
                    { name: 'Ledokombo', bpsCode: '35.09.28' },
                    { name: 'Sukowono', bpsCode: '35.09.29' },
                    { name: 'Silo', bpsCode: '35.09.30' },
                    { name: 'Sumberjambe (Sumber Jambe)', bpsCode: '35.09.31' }
                ]
            }, {
                name: 'Banyuwangi',
                bpscode: '35.10',
                districts: [
                    { name: 'Pesanggaran', bpsCode: '35.10.01' },
                    { name: 'Bangorejo', bpsCode: '35.10.02' },
                    { name: 'Purwoharjo', bpsCode: '35.10.03' },
                    { name: 'Tegaldlimo', bpsCode: '35.10.04' },
                    { name: 'Muncar', bpsCode: '35.10.05' },
                    { name: 'Cluring', bpsCode: '35.10.06' },
                    { name: 'Gambiran', bpsCode: '35.10.07' },
                    { name: 'Srono', bpsCode: '35.10.08' },
                    { name: 'Genteng', bpsCode: '35.10.09' },
                    { name: 'Glenmore', bpsCode: '35.10.10' },
                    { name: 'Kalibaru', bpsCode: '35.10.11' },
                    { name: 'Singojuruh', bpsCode: '35.10.12' },
                    { name: 'Rogojampi', bpsCode: '35.10.13' },
                    { name: 'Kabat', bpsCode: '35.10.14' },
                    { name: 'Glagah', bpsCode: '35.10.15' },
                    { name: 'Banyuwangi', bpsCode: '35.10.16' },
                    { name: 'Giri', bpsCode: '35.10.17' },
                    { name: 'Wongsorejo', bpsCode: '35.10.18' },
                    { name: 'Songgon', bpsCode: '35.10.19' },
                    { name: 'Sempu', bpsCode: '35.10.20' },
                    { name: 'Kalipuro', bpsCode: '35.10.21' },
                    { name: 'Siliragung', bpsCode: '35.10.22' },
                    { name: 'Tegalsari', bpsCode: '35.10.23' },
                    { name: 'Licin', bpsCode: '35.10.24' },
                    { name: 'Blimbingsari', bpsCode: '35.10.25' }
                ]
            }, {
                name: 'Bondowoso',
                bpscode: '35.11',
                districts: [
                    { name: 'Maesan', bpsCode: '35.11.01' },
                    { name: 'Tamanan', bpsCode: '35.11.02' },
                    { name: 'Tlogosari', bpsCode: '35.11.03' },
                    { name: 'Sukosari', bpsCode: '35.11.04' },
                    { name: 'Pujer', bpsCode: '35.11.05' },
                    { name: 'Grujugan', bpsCode: '35.11.06' },
                    { name: 'Curahdami', bpsCode: '35.11.07' },
                    { name: 'Tenggarang', bpsCode: '35.11.08' },
                    { name: 'Wonosari', bpsCode: '35.11.09' },
                    { name: 'Tapen', bpsCode: '35.11.10' },
                    { name: 'Bondowoso', bpsCode: '35.11.11' },
                    { name: 'Wringin', bpsCode: '35.11.12' },
                    { name: 'Tegalampel', bpsCode: '35.11.13' },
                    { name: 'Klabang', bpsCode: '35.11.14' },
                    { name: 'Cermee', bpsCode: '35.11.15' },
                    { name: 'Prajekan', bpsCode: '35.11.16' },
                    { name: 'Pakem', bpsCode: '35.11.17' },
                    { name: 'Sumberwringin (Sumber Wringin)', bpsCode: '35.11.18' },
                    { name: 'Sempol', bpsCode: '35.11.19' },
                    { name: 'Binakal', bpsCode: '35.11.20' },
                    { name: 'Taman Krocok', bpsCode: '35.11.21' },
                    { name: 'Botolinggo', bpsCode: '35.11.22' },
                    { name: 'Jambesari / Jambe Sari Darus Sholah', bpsCode: '35.11.23' }
                ]
            }, {
                name: 'Situbondo',
                bpscode: '35.12',
                districts: [
                    { name: 'Jatibanteng', bpsCode: '35.12.01' },
                    { name: 'Besuki', bpsCode: '35.12.02' },
                    { name: 'Suboh', bpsCode: '35.12.03' },
                    { name: 'Mlandingan', bpsCode: '35.12.04' },
                    { name: 'Kendit', bpsCode: '35.12.05' },
                    { name: 'Panarukan', bpsCode: '35.12.06' },
                    { name: 'Situbondo', bpsCode: '35.12.07' },
                    { name: 'Panji', bpsCode: '35.12.08' },
                    { name: 'Mangaran', bpsCode: '35.12.09' },
                    { name: 'Kapongan', bpsCode: '35.12.10' },
                    { name: 'Arjasa', bpsCode: '35.12.11' },
                    { name: 'Jangkar', bpsCode: '35.12.12' },
                    { name: 'Asembagus', bpsCode: '35.12.13' },
                    { name: 'Banyuputih', bpsCode: '35.12.14' },
                    { name: 'Sumbermalang', bpsCode: '35.12.15' },
                    { name: 'Banyuglugur', bpsCode: '35.12.16' },
                    { name: 'Bungatan', bpsCode: '35.12.17' }
                ]
            }, {
                name: 'Probolinggo',
                bpscode: '35.13',
                districts: [
                    { name: 'Sukapura', bpsCode: '35.13.01' },
                    { name: 'Sumber', bpsCode: '35.13.02' },
                    { name: 'Kuripan', bpsCode: '35.13.03' },
                    { name: 'Bantaran', bpsCode: '35.13.04' },
                    { name: 'Leces', bpsCode: '35.13.05' },
                    { name: 'Banyuanyar (Banyu Anyar)', bpsCode: '35.13.06' },
                    { name: 'Tiris', bpsCode: '35.13.07' },
                    { name: 'Krucil', bpsCode: '35.13.08' },
                    { name: 'Gading', bpsCode: '35.13.09' },
                    { name: 'Pakuniran', bpsCode: '35.13.10' },
                    { name: 'Kotaanyar (Kota Anyar)', bpsCode: '35.13.11' },
                    { name: 'Paiton', bpsCode: '35.13.12' },
                    { name: 'Besuk', bpsCode: '35.13.13' },
                    { name: 'Kraksaan', bpsCode: '35.13.14' },
                    { name: 'Krejengan', bpsCode: '35.13.15' },
                    { name: 'Pejarakan (Pajarakan)', bpsCode: '35.13.16' },
                    { name: 'Maron', bpsCode: '35.13.17' },
                    { name: 'Gending', bpsCode: '35.13.18' },
                    { name: 'Dringu', bpsCode: '35.13.19' },
                    { name: 'Tegalsiwalan (Tegal Siwalan)', bpsCode: '35.13.20' },
                    { name: 'Sumberasih', bpsCode: '35.13.21' },
                    { name: 'Wonomerto', bpsCode: '35.13.22' },
                    { name: 'Tongas', bpsCode: '35.13.23' },
                    { name: 'Lumbang', bpsCode: '35.13.24' }
                ]
            }, {
                name: 'Pasuruan',
                bpscode: '35.14',
                districts: [
                    { name: 'Purwodadi', bpsCode: '35.14.01' },
                    { name: 'Tutur', bpsCode: '35.14.02' },
                    { name: 'Puspo', bpsCode: '35.14.03' },
                    { name: 'Lumbang', bpsCode: '35.14.04' },
                    { name: 'Pasrepan', bpsCode: '35.14.05' },
                    { name: 'Kejayan', bpsCode: '35.14.06' },
                    { name: 'Wonorejo', bpsCode: '35.14.07' },
                    { name: 'Purwosari', bpsCode: '35.14.08' },
                    { name: 'Sukorejo', bpsCode: '35.14.09' },
                    { name: 'Prigen', bpsCode: '35.14.10' },
                    { name: 'Pandaan', bpsCode: '35.14.11' },
                    { name: 'Gempol', bpsCode: '35.14.12' },
                    { name: 'Beji', bpsCode: '35.14.13' },
                    { name: 'Bangil', bpsCode: '35.14.14' },
                    { name: 'Rembang', bpsCode: '35.14.15' },
                    { name: 'Kraton', bpsCode: '35.14.16' },
                    { name: 'Pohjentrek', bpsCode: '35.14.17' },
                    { name: 'Gondangwetan (Gondang Wetan)', bpsCode: '35.14.18' },
                    { name: 'Winongan', bpsCode: '35.14.19' },
                    { name: 'Grati', bpsCode: '35.14.20' },
                    { name: 'Nguling', bpsCode: '35.14.21' },
                    { name: 'Lekok', bpsCode: '35.14.22' },
                    { name: 'Rejoso', bpsCode: '35.14.23' },
                    { name: 'Tosari', bpsCode: '35.14.24' }
                ]
            }, {
                name: 'Sidoarjo',
                bpscode: '35.15',
                districts: [
                    { name: 'Tarik', bpsCode: '35.15.01' },
                    { name: 'Prambon', bpsCode: '35.15.02' },
                    { name: 'Krembung', bpsCode: '35.15.03' },
                    { name: 'Porong', bpsCode: '35.15.04' },
                    { name: 'Jabon', bpsCode: '35.15.05' },
                    { name: 'Tanggulangin', bpsCode: '35.15.06' },
                    { name: 'Candi', bpsCode: '35.15.07' },
                    { name: 'Sidoarjo', bpsCode: '35.15.08' },
                    { name: 'Tulangan', bpsCode: '35.15.09' },
                    { name: 'Wonoayu', bpsCode: '35.15.10' },
                    { name: 'Krian', bpsCode: '35.15.11' },
                    { name: 'Balongbendo', bpsCode: '35.15.12' },
                    { name: 'Taman', bpsCode: '35.15.13' },
                    { name: 'Sukodono', bpsCode: '35.15.14' },
                    { name: 'Buduran', bpsCode: '35.15.15' },
                    { name: 'Gedangan', bpsCode: '35.15.16' },
                    { name: 'Sedati', bpsCode: '35.15.17' },
                    { name: 'Waru', bpsCode: '35.15.18' }
                ]
            }, {
                name: 'Mojokerto',
                bpscode: '35.16',
                districts: [
                    { name: 'Jatirejo', bpsCode: '35.16.01' },
                    { name: 'Gondang', bpsCode: '35.16.02' },
                    { name: 'Pacet', bpsCode: '35.16.03' },
                    { name: 'Trawas', bpsCode: '35.16.04' },
                    { name: 'Ngoro', bpsCode: '35.16.05' },
                    { name: 'Pungging', bpsCode: '35.16.06' },
                    { name: 'Kutorejo', bpsCode: '35.16.07' },
                    { name: 'Mojosari', bpsCode: '35.16.08' },
                    { name: 'Dlanggu', bpsCode: '35.16.09' },
                    { name: 'Bangsal', bpsCode: '35.16.10' },
                    { name: 'Puri', bpsCode: '35.16.11' },
                    { name: 'Trowulan', bpsCode: '35.16.12' },
                    { name: 'Sooko', bpsCode: '35.16.13' },
                    { name: 'Gedeg', bpsCode: '35.16.14' },
                    { name: 'Kemlagi', bpsCode: '35.16.15' },
                    { name: 'Jetis', bpsCode: '35.16.16' },
                    { name: 'Dawarblandong (Dawar Blandong)', bpsCode: '35.16.17' },
                    { name: 'Mojoanyar', bpsCode: '35.16.18' }
                ]
            }, {
                name: 'Jombang',
                bpscode: '35.17',
                districts: [
                    { name: 'Perak', bpsCode: '35.17.01' },
                    { name: 'Gudo', bpsCode: '35.17.02' },
                    { name: 'Ngoro', bpsCode: '35.17.03' },
                    { name: 'Bareng', bpsCode: '35.17.04' },
                    { name: 'Wonosalam', bpsCode: '35.17.05' },
                    { name: 'Mojoagung', bpsCode: '35.17.06' },
                    { name: 'Mojowarno', bpsCode: '35.17.07' },
                    { name: 'Diwek', bpsCode: '35.17.08' },
                    { name: 'Jombang', bpsCode: '35.17.09' },
                    { name: 'Peterongan', bpsCode: '35.17.10' },
                    { name: 'Sumobito', bpsCode: '35.17.11' },
                    { name: 'Kesamben', bpsCode: '35.17.12' },
                    { name: 'Tembelang', bpsCode: '35.17.13' },
                    { name: 'Ploso', bpsCode: '35.17.14' },
                    { name: 'Plandaan', bpsCode: '35.17.15' },
                    { name: 'Kabuh', bpsCode: '35.17.16' },
                    { name: 'Kudu', bpsCode: '35.17.17' },
                    { name: 'Bandarkedungmulyo (Bandar Kedung Mulyo)', bpsCode: '35.17.18' },
                    { name: 'Jogoroto', bpsCode: '35.17.19' },
                    { name: 'Megaluh', bpsCode: '35.17.20' },
                    { name: 'Ngusikan', bpsCode: '35.17.21' }
                ]
            }, {
                name: 'Nganjuk',
                bpscode: '35.18',
                districts: [
                    { name: 'Sawahan', bpsCode: '35.18.01' },
                    { name: 'Ngetos', bpsCode: '35.18.02' },
                    { name: 'Berbek', bpsCode: '35.18.03' },
                    { name: 'Loceret', bpsCode: '35.18.04' },
                    { name: 'Pace', bpsCode: '35.18.05' },
                    { name: 'Prambon', bpsCode: '35.18.06' },
                    { name: 'Ngronggot', bpsCode: '35.18.07' },
                    { name: 'Kertosono', bpsCode: '35.18.08' },
                    { name: 'Patianrowo', bpsCode: '35.18.09' },
                    { name: 'Baron', bpsCode: '35.18.10' },
                    { name: 'Tanjunganom', bpsCode: '35.18.11' },
                    { name: 'Sukomoro', bpsCode: '35.18.12' },
                    { name: 'Nganjuk', bpsCode: '35.18.13' },
                    { name: 'Bagor', bpsCode: '35.18.14' },
                    { name: 'Wilangan', bpsCode: '35.18.15' },
                    { name: 'Rejoso', bpsCode: '35.18.16' },
                    { name: 'Gondang', bpsCode: '35.18.17' },
                    { name: 'Ngluyu', bpsCode: '35.18.18' },
                    { name: 'Lengkong', bpsCode: '35.18.19' },
                    { name: 'Jatikalen', bpsCode: '35.18.20' }
                ]
            }, {
                name: 'Madiun',
                bpscode: '35.19',
                districts: [
                    { name: 'Kebon Sari (Kebonsari)', bpsCode: '35.19.01' },
                    { name: 'Dolopo', bpsCode: '35.19.02' },
                    { name: 'Geger', bpsCode: '35.19.03' },
                    { name: 'Dagangan', bpsCode: '35.19.04' },
                    { name: 'Kare', bpsCode: '35.19.05' },
                    { name: 'Gemarang', bpsCode: '35.19.06' },
                    { name: 'Wungu', bpsCode: '35.19.07' },
                    { name: 'Madiun', bpsCode: '35.19.08' },
                    { name: 'Jiwan', bpsCode: '35.19.09' },
                    { name: 'Balerejo', bpsCode: '35.19.10' },
                    { name: 'Mejayan', bpsCode: '35.19.11' },
                    { name: 'Saradan', bpsCode: '35.19.12' },
                    { name: 'Pilangkenceng', bpsCode: '35.19.13' },
                    { name: 'Sawahan', bpsCode: '35.19.14' },
                    { name: 'Wonoasri', bpsCode: '35.19.15' }
                ]
            }, {
                name: 'Magetan',
                bpscode: '35.20',
                districts: [
                    { name: 'Poncol', bpsCode: '35.20.01' },
                    { name: 'Parang', bpsCode: '35.20.02' },
                    { name: 'Lembeyan', bpsCode: '35.20.03' },
                    { name: 'Takeran', bpsCode: '35.20.04' },
                    { name: 'Kawedanan', bpsCode: '35.20.05' },
                    { name: 'Magetan', bpsCode: '35.20.06' },
                    { name: 'Plaosan', bpsCode: '35.20.07' },
                    { name: 'Panekan', bpsCode: '35.20.08' },
                    { name: 'Sukomoro', bpsCode: '35.20.09' },
                    { name: 'Bendo', bpsCode: '35.20.10' },
                    { name: 'Maospati', bpsCode: '35.20.11' },
                    { name: 'Barat', bpsCode: '35.20.12' },
                    { name: 'Karangrejo', bpsCode: '35.20.13' },
                    { name: 'Karas', bpsCode: '35.20.14' },
                    { name: 'Kartoharjo (Kertoharjo)', bpsCode: '35.20.15' },
                    { name: 'Ngariboyo', bpsCode: '35.20.16' },
                    { name: 'Nguntoronadi', bpsCode: '35.20.17' },
                    { name: 'Sidorejo', bpsCode: '35.20.18' }
                ]
            }, {
                name: 'Ngawi',
                bpscode: '35.21',
                districts: [
                    { name: 'Sine', bpsCode: '35.21.01' },
                    { name: 'Ngrambe', bpsCode: '35.21.02' },
                    { name: 'Jogorogo', bpsCode: '35.21.03' },
                    { name: 'Kendal', bpsCode: '35.21.04' },
                    { name: 'Geneng', bpsCode: '35.21.05' },
                    { name: 'Kwadungan', bpsCode: '35.21.06' },
                    { name: 'Karangjati', bpsCode: '35.21.07' },
                    { name: 'Padas', bpsCode: '35.21.08' },
                    { name: 'Ngawi', bpsCode: '35.21.09' },
                    { name: 'Paron', bpsCode: '35.21.10' },
                    { name: 'Kedunggalar', bpsCode: '35.21.11' },
                    { name: 'Widodaren', bpsCode: '35.21.12' },
                    { name: 'Mantingan', bpsCode: '35.21.13' },
                    { name: 'Pangkur', bpsCode: '35.21.14' },
                    { name: 'Bringin', bpsCode: '35.21.15' },
                    { name: 'Pitu', bpsCode: '35.21.16' },
                    { name: 'Karanganyar', bpsCode: '35.21.17' },
                    { name: 'Gerih', bpsCode: '35.21.18' },
                    { name: 'Kasreman', bpsCode: '35.21.19' }
                ]
            }, {
                name: 'Bojonegoro',
                bpscode: '35.22',
                districts: [
                    { name: 'Ngraho', bpsCode: '35.22.01' },
                    { name: 'Tambakrejo', bpsCode: '35.22.02' },
                    { name: 'Ngambon', bpsCode: '35.22.03' },
                    { name: 'Ngasem', bpsCode: '35.22.04' },
                    { name: 'Bubulan', bpsCode: '35.22.05' },
                    { name: 'Dander', bpsCode: '35.22.06' },
                    { name: 'Sugihwaras', bpsCode: '35.22.07' },
                    { name: 'Kedungadem', bpsCode: '35.22.08' },
                    { name: 'Kepohbaru', bpsCode: '35.22.09' },
                    { name: 'Baureno', bpsCode: '35.22.10' },
                    { name: 'Kanor', bpsCode: '35.22.11' },
                    { name: 'Sumberejo', bpsCode: '35.22.12' },
                    { name: 'Balen', bpsCode: '35.22.13' },
                    { name: 'Kapas', bpsCode: '35.22.14' },
                    { name: 'Bojonegoro', bpsCode: '35.22.15' },
                    { name: 'Kalitidu', bpsCode: '35.22.16' },
                    { name: 'Malo', bpsCode: '35.22.17' },
                    { name: 'Purwosari', bpsCode: '35.22.18' },
                    { name: 'Padangan', bpsCode: '35.22.19' },
                    { name: 'Kasiman', bpsCode: '35.22.20' },
                    { name: 'Temayang', bpsCode: '35.22.21' },
                    { name: 'Margomulyo', bpsCode: '35.22.22' },
                    { name: 'Trucuk', bpsCode: '35.22.23' },
                    { name: 'Sukosewu', bpsCode: '35.22.24' },
                    { name: 'Kedewan', bpsCode: '35.22.25' },
                    { name: 'Gondang', bpsCode: '35.22.26' },
                    { name: 'Sekar', bpsCode: '35.22.27' },
                    { name: 'Gayam', bpsCode: '35.22.28' }
                ]
            }, {
                name: 'Tuban',
                bpscode: '35.23',
                districts: [
                    { name: 'Kenduruan', bpsCode: '35.23.01' },
                    { name: 'Jatirogo', bpsCode: '35.23.02' },
                    { name: 'Bangilan', bpsCode: '35.23.03' },
                    { name: 'Bancar', bpsCode: '35.23.04' },
                    { name: 'Senori', bpsCode: '35.23.05' },
                    { name: 'Tambakboyo', bpsCode: '35.23.06' },
                    { name: 'Singgahan', bpsCode: '35.23.07' },
                    { name: 'Kerek', bpsCode: '35.23.08' },
                    { name: 'Parengan', bpsCode: '35.23.09' },
                    { name: 'Montong', bpsCode: '35.23.10' },
                    { name: 'Soko', bpsCode: '35.23.11' },
                    { name: 'Jenu', bpsCode: '35.23.12' },
                    { name: 'Merakurak', bpsCode: '35.23.13' },
                    { name: 'Rengel', bpsCode: '35.23.14' },
                    { name: 'Semanding', bpsCode: '35.23.15' },
                    { name: 'Tuban', bpsCode: '35.23.16' },
                    { name: 'Plumpang', bpsCode: '35.23.17' },
                    { name: 'Palang', bpsCode: '35.23.18' },
                    { name: 'Widang', bpsCode: '35.23.19' },
                    { name: 'Grabagan', bpsCode: '35.23.20' }
                ]
            }, {
                name: 'Lamongan',
                bpscode: '35.24',
                districts: [
                    { name: 'Sukorame', bpsCode: '35.24.01' },
                    { name: 'Bluluk', bpsCode: '35.24.02' },
                    { name: 'Modo', bpsCode: '35.24.03' },
                    { name: 'Ngimbang', bpsCode: '35.24.04' },
                    { name: 'Babat', bpsCode: '35.24.05' },
                    { name: 'Kedungpring', bpsCode: '35.24.06' },
                    { name: 'Brondong', bpsCode: '35.24.07' },
                    { name: 'Laren', bpsCode: '35.24.08' },
                    { name: 'Sekaran', bpsCode: '35.24.09' },
                    { name: 'Maduran', bpsCode: '35.24.10' },
                    { name: 'Sambeng', bpsCode: '35.24.11' },
                    { name: 'Sugio', bpsCode: '35.24.12' },
                    { name: 'Pucuk', bpsCode: '35.24.13' },
                    { name: 'Paciran', bpsCode: '35.24.14' },
                    { name: 'Solokuro', bpsCode: '35.24.15' },
                    { name: 'Mantup', bpsCode: '35.24.16' },
                    { name: 'Sukodadi', bpsCode: '35.24.17' },
                    { name: 'Karanggeneng (Karang Geneng)', bpsCode: '35.24.18' },
                    { name: 'Kembangbahu', bpsCode: '35.24.19' },
                    { name: 'Kalitengah', bpsCode: '35.24.20' },
                    { name: 'Turi', bpsCode: '35.24.21' },
                    { name: 'Lamongan', bpsCode: '35.24.22' },
                    { name: 'Tikung', bpsCode: '35.24.23' },
                    { name: 'Karangbinangun', bpsCode: '35.24.24' },
                    { name: 'Deket', bpsCode: '35.24.25' },
                    { name: 'Glagah', bpsCode: '35.24.26' },
                    { name: 'Sarirejo', bpsCode: '35.24.27' }
                ]
            }, {
                name: 'Gresik',
                bpscode: '35.25',
                districts: [
                    { name: 'Dukun', bpsCode: '35.25.01' },
                    { name: 'Balongpanggang (Balong Panggang)', bpsCode: '35.25.02' },
                    { name: 'Panceng', bpsCode: '35.25.03' },
                    { name: 'Benjeng', bpsCode: '35.25.04' },
                    { name: 'Duduksampeyan (Duduk Sampeyan)', bpsCode: '35.25.05' },
                    { name: 'Wringinanom (Wringin Anom)', bpsCode: '35.25.06' },
                    { name: 'Ujungpangkah (Ujung Pangkah)', bpsCode: '35.25.07' },
                    { name: 'Kedamean', bpsCode: '35.25.08' },
                    { name: 'Sidayu', bpsCode: '35.25.09' },
                    { name: 'Manyar', bpsCode: '35.25.10' },
                    { name: 'Cerme', bpsCode: '35.25.11' },
                    { name: 'Bungah', bpsCode: '35.25.12' },
                    { name: 'Menganti', bpsCode: '35.25.13' },
                    { name: 'Kebomas', bpsCode: '35.25.14' },
                    { name: 'Driyorejo', bpsCode: '35.25.15' },
                    { name: 'Gresik', bpsCode: '35.25.16' },
                    { name: 'Sangkapura', bpsCode: '35.25.17' },
                    { name: 'Tambak', bpsCode: '35.25.18' }
                ]
            }, {
                name: 'Bangkalan',
                bpscode: '35.26',
                districts: [
                    { name: 'Bangkalan', bpsCode: '35.26.01' },
                    { name: 'Socah', bpsCode: '35.26.02' },
                    { name: 'Burneh', bpsCode: '35.26.03' },
                    { name: 'Kamal', bpsCode: '35.26.04' },
                    { name: 'Arosbaya', bpsCode: '35.26.05' },
                    { name: 'Geger', bpsCode: '35.26.06' },
                    { name: 'Klampis', bpsCode: '35.26.07' },
                    { name: 'Sepulu', bpsCode: '35.26.08' },
                    { name: 'Tanjung Bumi (Tanjungbumi)', bpsCode: '35.26.09' },
                    { name: 'Kokop', bpsCode: '35.26.10' },
                    { name: 'Kwanyar', bpsCode: '35.26.11' },
                    { name: 'Labang', bpsCode: '35.26.12' },
                    { name: 'Tanah Merah', bpsCode: '35.26.13' },
                    { name: 'Tragah', bpsCode: '35.26.14' },
                    { name: 'Blega', bpsCode: '35.26.15' },
                    { name: 'Modung', bpsCode: '35.26.16' },
                    { name: 'Konang', bpsCode: '35.26.17' },
                    { name: 'Galis', bpsCode: '35.26.18' }
                ]
            }, {
                name: 'Sampang',
                bpscode: '35.27',
                districts: [
                    { name: 'Sreseh', bpsCode: '35.27.01' },
                    { name: 'Torjun', bpsCode: '35.27.02' },
                    { name: 'Sampang', bpsCode: '35.27.03' },
                    { name: 'Camplong', bpsCode: '35.27.04' },
                    { name: 'Omben', bpsCode: '35.27.05' },
                    { name: 'Kedungdung', bpsCode: '35.27.06' },
                    { name: 'Jrengik', bpsCode: '35.27.07' },
                    { name: 'Tambelangan', bpsCode: '35.27.08' },
                    { name: 'Banyuates', bpsCode: '35.27.09' },
                    { name: 'Robatal', bpsCode: '35.27.10' },
                    { name: 'Sokobanah', bpsCode: '35.27.11' },
                    { name: 'Ketapang', bpsCode: '35.27.12' },
                    { name: 'Pangarengan', bpsCode: '35.27.13' },
                    { name: 'Karangpenang (Karang Penang)', bpsCode: '35.27.14' }
                ]
            }, {
                name: 'Pamekasan',
                bpscode: '35.28',
                districts: [
                    { name: 'Tlanakan', bpsCode: '35.28.01' },
                    { name: 'Pademawu', bpsCode: '35.28.02' },
                    { name: 'Galis', bpsCode: '35.28.03' },
                    { name: 'Pamekasan', bpsCode: '35.28.04' },
                    { name: 'Proppo', bpsCode: '35.28.05' },
                    { name: 'Palenggaan (Palenga\'an)', bpsCode: '35.28.06' },
                    { name: 'Pegantenan', bpsCode: '35.28.07' },
                    { name: 'Larangan', bpsCode: '35.28.08' },
                    { name: 'Pakong', bpsCode: '35.28.09' },
                    { name: 'Waru', bpsCode: '35.28.10' },
                    { name: 'Batumarmar', bpsCode: '35.28.11' },
                    { name: 'Kadur', bpsCode: '35.28.12' },
                    { name: 'Pasean', bpsCode: '35.28.13' }
                ]
            }, {
                name: 'Sumenep',
                bpscode: '35.29',
                districts: [
                    { name: 'Kota Sumenep', bpsCode: '35.29.01' },
                    { name: 'Kalianget', bpsCode: '35.29.02' },
                    { name: 'Manding', bpsCode: '35.29.03' },
                    { name: 'Talango', bpsCode: '35.29.04' },
                    { name: 'Bluto', bpsCode: '35.29.05' },
                    { name: 'Saronggi', bpsCode: '35.29.06' },
                    { name: 'Lenteng', bpsCode: '35.29.07' },
                    { name: 'Giliginting (Gili Ginting)', bpsCode: '35.29.08' },
                    { name: 'Guluk-Guluk (Guluk Guluk)', bpsCode: '35.29.09' },
                    { name: 'Ganding', bpsCode: '35.29.10' },
                    { name: 'Pragaan', bpsCode: '35.29.11' },
                    { name: 'Ambunten', bpsCode: '35.29.12' },
                    { name: 'Pasongsongan', bpsCode: '35.29.13' },
                    { name: 'Dasuk', bpsCode: '35.29.14' },
                    { name: 'Rubaru', bpsCode: '35.29.15' },
                    { name: 'Batang Batang', bpsCode: '35.29.16' },
                    { name: 'Batuputih', bpsCode: '35.29.17' },
                    { name: 'Dungkek', bpsCode: '35.29.18' },
                    { name: 'Gapura', bpsCode: '35.29.19' },
                    { name: 'Gayam', bpsCode: '35.29.20' },
                    { name: 'Nonggunong', bpsCode: '35.29.21' },
                    { name: 'Raas (Ra\'as)', bpsCode: '35.29.22' },
                    { name: 'Masalembu', bpsCode: '35.29.23' },
                    { name: 'Arjasa', bpsCode: '35.29.24' },
                    { name: 'Sapeken', bpsCode: '35.29.25' },
                    { name: 'Batuan', bpsCode: '35.29.26' },
                    { name: 'Kangayan', bpsCode: '35.29.27' }
                ]
            }, {
                name: 'Kediri',
                bpscode: '35.71',
                districts: [
                    { name: 'Mojoroto', bpsCode: '35.71.01' },
                    { name: 'Kota (Kediri Kota)', bpsCode: '35.71.02' },
                    { name: 'Pesantren', bpsCode: '35.71.03' }
                ]
            }, {
                name: 'Blitar',
                bpscode: '35.72',
                districts: [
                    { name: 'Kepanjenkidul (Kepanjen Kidul)', bpsCode: '35.72.01' },
                    { name: 'Sukorejo', bpsCode: '35.72.02' },
                    { name: 'Sananwetan (Sanan Wetan)', bpsCode: '35.72.03' }
                ]
            }, {
                name: 'Malang',
                bpscode: '35.73',
                districts: [
                    { name: 'Blimbing', bpsCode: '35.73.01' },
                    { name: 'Klojen', bpsCode: '35.73.02' },
                    { name: 'Kedungkandang', bpsCode: '35.73.03' },
                    { name: 'Sukun', bpsCode: '35.73.04' },
                    { name: 'Lowokwaru', bpsCode: '35.73.05' }
                ]
            }, {
                name: 'Probolinggo',
                bpscode: '35.74',
                districts: [
                    { name: 'Kademangan', bpsCode: '35.74.01' },
                    { name: 'Wonoasih', bpsCode: '35.74.02' },
                    { name: 'Mayangan', bpsCode: '35.74.03' },
                    { name: 'Kanigaran', bpsCode: '35.74.04' },
                    { name: 'Kedopok (Kedopak)', bpsCode: '35.74.05' }
                ]
            }, {
                name: 'Pasuruan',
                bpscode: '35.75',
                districts: [
                    { name: 'Gadingrejo', bpsCode: '35.75.01' },
                    { name: 'Purworejo', bpsCode: '35.75.02' },
                    { name: 'Bugul Kidul', bpsCode: '35.75.03' },
                    { name: 'Panggungrejo', bpsCode: '35.75.04' }
                ]
            }, {
                name: 'Mojokerto',
                bpscode: '35.76',
                districts: [
                    { name: 'Prajuritkulon (Prajurit Kulon)', bpsCode: '35.76.01' },
                    { name: 'Magersari', bpsCode: '35.76.02' },
                    { name: 'Kranggan', bpsCode: '35.76.03' }
                ]
            }, {
                name: 'Madiun',
                bpscode: '35.77',
                districts: [
                    { name: 'Kartoharjo', bpsCode: '35.77.01' },
                    { name: 'Manguharjo', bpsCode: '35.77.02' },
                    { name: 'Taman', bpsCode: '35.77.03' }
                ]
            }, {
                name: 'Surabaya',
                bpscode: '35.78',
                districts: [
                    { name: 'Karangpilang', bpsCode: '35.78.01' },
                    { name: 'Wonocolo', bpsCode: '35.78.02' },
                    { name: 'Rungkut', bpsCode: '35.78.03' },
                    { name: 'Wonokromo', bpsCode: '35.78.04' },
                    { name: 'Tegalsari', bpsCode: '35.78.05' },
                    { name: 'Sawahan', bpsCode: '35.78.06' },
                    { name: 'Genteng', bpsCode: '35.78.07' },
                    { name: 'Gubeng', bpsCode: '35.78.08' },
                    { name: 'Sukolilo', bpsCode: '35.78.09' },
                    { name: 'Tambaksari', bpsCode: '35.78.10' },
                    { name: 'Simokerto', bpsCode: '35.78.11' },
                    { name: 'Pabean Cantian (Pabean Cantikan)', bpsCode: '35.78.12' },
                    { name: 'Bubutan', bpsCode: '35.78.13' },
                    { name: 'Tandes', bpsCode: '35.78.14' },
                    { name: 'Krembangan', bpsCode: '35.78.15' },
                    { name: 'Semampir', bpsCode: '35.78.16' },
                    { name: 'Kenjeran', bpsCode: '35.78.17' },
                    { name: 'Lakarsantri', bpsCode: '35.78.18' },
                    { name: 'Benowo', bpsCode: '35.78.19' },
                    { name: 'Wiyung', bpsCode: '35.78.20' },
                    { name: 'Dukuh Pakis', bpsCode: '35.78.21' },
                    { name: 'Gayungan', bpsCode: '35.78.22' },
                    { name: 'Jambangan', bpsCode: '35.78.23' },
                    { name: 'Tenggilis Mejoyo', bpsCode: '35.78.24' },
                    { name: 'Gunung Anyar (Gununganyar)', bpsCode: '35.78.25' },
                    { name: 'Mulyorejo', bpsCode: '35.78.26' },
                    { name: 'Sukomanunggal', bpsCode: '35.78.27' },
                    { name: 'Asem Rowo (Asemrowo)', bpsCode: '35.78.28' },
                    { name: 'Bulak', bpsCode: '35.78.29' },
                    { name: 'Pakal', bpsCode: '35.78.30' },
                    { name: 'Sambikerep', bpsCode: '35.78.31' }
                ]
            }, {
                name: 'Batu',
                bpscode: '35.79',
                districts: [
                    { name: 'Batu', bpsCode: '35.79.01' },
                    { name: 'Bumiaji', bpsCode: '35.79.02' },
                    { name: 'Junrejo', bpsCode: '35.79.03' }
                ]
            }
        ]
    },
    JK: {
        regencies: [
            {
                name: 'Kepulauan Seribu',
                bpscode: '31.01',
                districts: [
                    { name: 'Kepulauan Seribu Utara', bpsCode: '31.01.01' },
                    { name: 'Kepulauan Seribu Selatan', bpsCode: '31.01.02' }
                ]
            }, {
                name: 'Jakarta Pusat',
                bpscode: '31.71',
                districts: [
                    { name: 'Gambir', bpsCode: '31.71.01' },
                    { name: 'Sawah Besar', bpsCode: '31.71.02' },
                    { name: 'Kemayoran', bpsCode: '31.71.03' },
                    { name: 'Senen', bpsCode: '31.71.04' },
                    { name: 'Cempaka Putih', bpsCode: '31.71.05' },
                    { name: 'Menteng', bpsCode: '31.71.06' },
                    { name: 'Tanah Abang', bpsCode: '31.71.07' },
                    { name: 'Johar Baru', bpsCode: '31.71.08' }
                ]
            }, {
                name: 'Jakarta Utara',
                bpscode: '31.72',
                districts: [
                    { name: 'Penjaringan', bpsCode: '31.72.01' },
                    { name: 'Tanjung Priok', bpsCode: '31.72.02' },
                    { name: 'Koja', bpsCode: '31.72.03' },
                    { name: 'Cilincing', bpsCode: '31.72.04' },
                    { name: 'Pademangan', bpsCode: '31.72.05' },
                    { name: 'Kelapa Gading', bpsCode: '31.72.06' }
                ]
            }, {
                name: 'Jakarta Barat',
                bpscode: '31.73',
                districts: [
                    { name: 'Cengkareng', bpsCode: '31.73.01' },
                    { name: 'Grogol Petamburan', bpsCode: '31.73.02' },
                    { name: 'Taman Sari', bpsCode: '31.73.03' },
                    { name: 'Tambora', bpsCode: '31.73.04' },
                    { name: 'Kebon Jeruk', bpsCode: '31.73.05' },
                    { name: 'Kalideres', bpsCode: '31.73.06' },
                    { name: 'Pal Merah (Palmerah)', bpsCode: '31.73.07' },
                    { name: 'Kembangan', bpsCode: '31.73.08' }
                ]
            }, {
                name: 'Jakarta Selatan',
                bpscode: '31.74',
                districts: [
                    { name: 'Tebet', bpsCode: '31.74.01' },
                    { name: 'Setiabudi (Setia Budi)', bpsCode: '31.74.02' },
                    { name: 'Mampang Prapatan', bpsCode: '31.74.03' },
                    { name: 'Pasar Minggu', bpsCode: '31.74.04' },
                    { name: 'Kebayoran Lama', bpsCode: '31.74.05' },
                    { name: 'Cilandak', bpsCode: '31.74.06' },
                    { name: 'Kebayoran Baru', bpsCode: '31.74.07' },
                    { name: 'Pancoran', bpsCode: '31.74.08' },
                    { name: 'Jagakarsa', bpsCode: '31.74.09' },
                    { name: 'Pesanggrahan', bpsCode: '31.74.10' }
                ]
            }, {
                name: 'Jakarta Timur',
                bpscode: '31.75',
                districts: [
                    { name: 'Matraman', bpsCode: '31.75.01' },
                    { name: 'Pulogadung (Pulo Gadung)', bpsCode: '31.75.02' },
                    { name: 'Jatinegara', bpsCode: '31.75.03' },
                    { name: 'Kramatjati (Kramat Jati)', bpsCode: '31.75.04' },
                    { name: 'Pasar Rebo', bpsCode: '31.75.05' },
                    { name: 'Cakung', bpsCode: '31.75.06' },
                    { name: 'Duren Sawit', bpsCode: '31.75.07' },
                    { name: 'Makasar', bpsCode: '31.75.08' },
                    { name: 'Ciracas', bpsCode: '31.75.09' },
                    { name: 'Cipayung', bpsCode: '31.75.10' }
                ]
            }
        ]
    },
    JT: {
        regencies: [
            {
                name: 'Cilacap',
                bpscode: '33.01',
                districts: [
                    { name: 'Kedungreja', bpsCode: '33.01.01' },
                    { name: 'Kesugihan', bpsCode: '33.01.02' },
                    { name: 'Adipala', bpsCode: '33.01.03' },
                    { name: 'Binangun', bpsCode: '33.01.04' },
                    { name: 'Nusawungu', bpsCode: '33.01.05' },
                    { name: 'Kroya', bpsCode: '33.01.06' },
                    { name: 'Maos', bpsCode: '33.01.07' },
                    { name: 'Jeruklegi', bpsCode: '33.01.08' },
                    { name: 'Kawunganten', bpsCode: '33.01.09' },
                    { name: 'Gandrungmangu', bpsCode: '33.01.10' },
                    { name: 'Sidareja', bpsCode: '33.01.11' },
                    { name: 'Karangpucung', bpsCode: '33.01.12' },
                    { name: 'Cimanggu', bpsCode: '33.01.13' },
                    { name: 'Majenang', bpsCode: '33.01.14' },
                    { name: 'Wanareja', bpsCode: '33.01.15' },
                    { name: 'Dayeuhluhur', bpsCode: '33.01.16' },
                    { name: 'Sampang', bpsCode: '33.01.17' },
                    { name: 'Cipari', bpsCode: '33.01.18' },
                    { name: 'Patimuan', bpsCode: '33.01.19' },
                    { name: 'Bantarsari', bpsCode: '33.01.20' },
                    { name: 'Cilacap Selatan', bpsCode: '33.01.21' },
                    { name: 'Cilacap Tengah', bpsCode: '33.01.22' },
                    { name: 'Cilacap Utara', bpsCode: '33.01.23' },
                    { name: 'Kampung Laut', bpsCode: '33.01.24' }
                ]
            }, {
                name: 'Banyumas',
                bpscode: '33.02',
                districts: [
                    { name: 'Lumbir', bpsCode: '33.02.01' },
                    { name: 'Wangon', bpsCode: '33.02.02' },
                    { name: 'Jatilawang', bpsCode: '33.02.03' },
                    { name: 'Rawalo', bpsCode: '33.02.04' },
                    { name: 'Kebasen', bpsCode: '33.02.05' },
                    { name: 'Kemranjen', bpsCode: '33.02.06' },
                    { name: 'Sumpiuh', bpsCode: '33.02.07' },
                    { name: 'Tambak', bpsCode: '33.02.08' },
                    { name: 'Somagede', bpsCode: '33.02.09' },
                    { name: 'Kalibagor', bpsCode: '33.02.10' },
                    { name: 'Banyumas', bpsCode: '33.02.11' },
                    { name: 'Patikraja', bpsCode: '33.02.12' },
                    { name: 'Purwojati', bpsCode: '33.02.13' },
                    { name: 'Ajibarang', bpsCode: '33.02.14' },
                    { name: 'Gumelar', bpsCode: '33.02.15' },
                    { name: 'Pekuncen', bpsCode: '33.02.16' },
                    { name: 'Cilongok', bpsCode: '33.02.17' },
                    { name: 'Karanglewas', bpsCode: '33.02.18' },
                    { name: 'Sokaraja', bpsCode: '33.02.19' },
                    { name: 'Kembaran', bpsCode: '33.02.20' },
                    { name: 'Sumbang', bpsCode: '33.02.21' },
                    { name: 'Baturraden (Baturaden)', bpsCode: '33.02.22' },
                    { name: 'Kedungbanteng (Kedung Banteng)', bpsCode: '33.02.23' },
                    { name: 'Purwokerto Selatan', bpsCode: '33.02.24' },
                    { name: 'Purwokerto Barat', bpsCode: '33.02.25' },
                    { name: 'Purwokerto Timur', bpsCode: '33.02.26' },
                    { name: 'Purwokerto Utara', bpsCode: '33.02.27' }
                ]
            }, {
                name: 'Purbalingga',
                bpscode: '33.03',
                districts: [
                    { name: 'Kemangkon', bpsCode: '33.03.01' },
                    { name: 'Bukateja', bpsCode: '33.03.02' },
                    { name: 'Kejobong', bpsCode: '33.03.03' },
                    { name: 'Kaligondang', bpsCode: '33.03.04' },
                    { name: 'Purbalingga', bpsCode: '33.03.05' },
                    { name: 'Kalimanah', bpsCode: '33.03.06' },
                    { name: 'Kutasari', bpsCode: '33.03.07' },
                    { name: 'Mrebet', bpsCode: '33.03.08' },
                    { name: 'Bobotsari', bpsCode: '33.03.09' },
                    { name: 'Karangreja', bpsCode: '33.03.10' },
                    { name: 'Karanganyar', bpsCode: '33.03.11' },
                    { name: 'Karangmoncol', bpsCode: '33.03.12' },
                    { name: 'Rembang', bpsCode: '33.03.13' },
                    { name: 'Bojongsari', bpsCode: '33.03.14' },
                    { name: 'Padamara', bpsCode: '33.03.15' },
                    { name: 'Pengadegan', bpsCode: '33.03.16' },
                    { name: 'Karangjambu', bpsCode: '33.03.17' },
                    { name: 'Kertanegara', bpsCode: '33.03.18' }
                ]
            }, {
                name: 'Banjarnegara',
                bpscode: '33.04',
                districts: [
                    { name: 'Susukan', bpsCode: '33.04.01' },
                    { name: 'Purworeja Klampok (Purworejo Klampok)', bpsCode: '33.04.02' },
                    { name: 'Mandiraja', bpsCode: '33.04.03' },
                    { name: 'Purwanegara (Purwonegoro)', bpsCode: '33.04.04' },
                    { name: 'Bawang', bpsCode: '33.04.05' },
                    { name: 'Banjarnegara', bpsCode: '33.04.06' },
                    { name: 'Sigaluh', bpsCode: '33.04.07' },
                    { name: 'Madukara', bpsCode: '33.04.08' },
                    { name: 'Banjarmangu', bpsCode: '33.04.09' },
                    { name: 'Wanadadi (Wonodadi)', bpsCode: '33.04.10' },
                    { name: 'Rakit', bpsCode: '33.04.11' },
                    { name: 'Punggelan', bpsCode: '33.04.12' },
                    { name: 'Karangkobar', bpsCode: '33.04.13' },
                    { name: 'Pagentan', bpsCode: '33.04.14' },
                    { name: 'Pejawaran', bpsCode: '33.04.15' },
                    { name: 'Batur', bpsCode: '33.04.16' },
                    { name: 'Wanayasa', bpsCode: '33.04.17' },
                    { name: 'Kalibening', bpsCode: '33.04.18' },
                    { name: 'Pandanarum', bpsCode: '33.04.19' },
                    { name: 'Pagedongan', bpsCode: '33.04.20' }
                ]
            }, {
                name: 'Kebumen',
                bpscode: '33.05',
                districts: [
                    { name: 'Ayah', bpsCode: '33.05.01' },
                    { name: 'Buayan', bpsCode: '33.05.02' },
                    { name: 'Puring', bpsCode: '33.05.03' },
                    { name: 'Petanahan', bpsCode: '33.05.04' },
                    { name: 'Klirong', bpsCode: '33.05.05' },
                    { name: 'Buluspesantren', bpsCode: '33.05.06' },
                    { name: 'Ambal', bpsCode: '33.05.07' },
                    { name: 'Mirit', bpsCode: '33.05.08' },
                    { name: 'Prembun', bpsCode: '33.05.09' },
                    { name: 'Kutowinangun', bpsCode: '33.05.10' },
                    { name: 'Alian/Aliyan', bpsCode: '33.05.11' },
                    { name: 'Kebumen', bpsCode: '33.05.12' },
                    { name: 'Pejagoan', bpsCode: '33.05.13' },
                    { name: 'Sruweng', bpsCode: '33.05.14' },
                    { name: 'Adimulyo', bpsCode: '33.05.15' },
                    { name: 'Kuwarasan', bpsCode: '33.05.16' },
                    { name: 'Rowokele', bpsCode: '33.05.17' },
                    { name: 'Sempor', bpsCode: '33.05.18' },
                    { name: 'Gombong', bpsCode: '33.05.19' },
                    { name: 'Karanganyar', bpsCode: '33.05.20' },
                    { name: 'Karanggayam', bpsCode: '33.05.21' },
                    { name: 'Sadang', bpsCode: '33.05.22' },
                    { name: 'Bonorowo', bpsCode: '33.05.23' },
                    { name: 'Padureso', bpsCode: '33.05.24' },
                    { name: 'Poncowarno', bpsCode: '33.05.25' },
                    { name: 'Karangsambung', bpsCode: '33.05.26' }
                ]
            }, {
                name: 'Purworejo',
                bpscode: '33.06',
                districts: [
                    { name: 'Grabag', bpsCode: '33.06.01' },
                    { name: 'Ngombol', bpsCode: '33.06.02' },
                    { name: 'Purwodadi', bpsCode: '33.06.03' },
                    { name: 'Bagelen', bpsCode: '33.06.04' },
                    { name: 'Kaligesing', bpsCode: '33.06.05' },
                    { name: 'Purworejo', bpsCode: '33.06.06' },
                    { name: 'Banyuurip', bpsCode: '33.06.07' },
                    { name: 'Bayan', bpsCode: '33.06.08' },
                    { name: 'Kutoarjo', bpsCode: '33.06.09' },
                    { name: 'Butuh', bpsCode: '33.06.10' },
                    { name: 'Pituruh', bpsCode: '33.06.11' },
                    { name: 'Kemiri', bpsCode: '33.06.12' },
                    { name: 'Bruno', bpsCode: '33.06.13' },
                    { name: 'Gebang', bpsCode: '33.06.14' },
                    { name: 'Loano', bpsCode: '33.06.15' },
                    { name: 'Bener', bpsCode: '33.06.16' }
                ]
            }, {
                name: 'Wonosobo',
                bpscode: '33.07',
                districts: [
                    { name: 'Wadaslintang', bpsCode: '33.07.01' },
                    { name: 'Kepil', bpsCode: '33.07.02' },
                    { name: 'Sapuran', bpsCode: '33.07.03' },
                    { name: 'Kaliwiro', bpsCode: '33.07.04' },
                    { name: 'Leksono', bpsCode: '33.07.05' },
                    { name: 'Selomerto', bpsCode: '33.07.06' },
                    { name: 'Kalikajar', bpsCode: '33.07.07' },
                    { name: 'Kertek', bpsCode: '33.07.08' },
                    { name: 'Wonosobo', bpsCode: '33.07.09' },
                    { name: 'Watumalang', bpsCode: '33.07.10' },
                    { name: 'Mojotengah', bpsCode: '33.07.11' },
                    { name: 'Garung', bpsCode: '33.07.12' },
                    { name: 'Kejajar', bpsCode: '33.07.13' },
                    { name: 'Sukoharjo', bpsCode: '33.07.14' },
                    { name: 'Kalibawang', bpsCode: '33.07.15' }
                ]
            }, {
                name: 'Magelang',
                bpscode: '33.08',
                districts: [
                    { name: 'Salaman', bpsCode: '33.08.01' },
                    { name: 'Borobudur', bpsCode: '33.08.02' },
                    { name: 'Ngluwar', bpsCode: '33.08.03' },
                    { name: 'Salam', bpsCode: '33.08.04' },
                    { name: 'Srumbung', bpsCode: '33.08.05' },
                    { name: 'Dukun', bpsCode: '33.08.06' },
                    { name: 'Sawangan', bpsCode: '33.08.07' },
                    { name: 'Muntilan', bpsCode: '33.08.08' },
                    { name: 'Mungkid', bpsCode: '33.08.09' },
                    { name: 'Mertoyudan', bpsCode: '33.08.10' },
                    { name: 'Tempuran', bpsCode: '33.08.11' },
                    { name: 'Kajoran', bpsCode: '33.08.12' },
                    { name: 'Kaliangkrik', bpsCode: '33.08.13' },
                    { name: 'Bandongan', bpsCode: '33.08.14' },
                    { name: 'Candimulyo', bpsCode: '33.08.15' },
                    { name: 'Pakis', bpsCode: '33.08.16' },
                    { name: 'Ngablak', bpsCode: '33.08.17' },
                    { name: 'Grabag', bpsCode: '33.08.18' },
                    { name: 'Tegalrejo', bpsCode: '33.08.19' },
                    { name: 'Secang', bpsCode: '33.08.20' },
                    { name: 'Windusari', bpsCode: '33.08.21' }
                ]
            }, {
                name: 'Boyolali',
                bpscode: '33.09',
                districts: [
                    { name: 'Selo', bpsCode: '33.09.01' },
                    { name: 'Ampel', bpsCode: '33.09.02' },
                    { name: 'Cepogo', bpsCode: '33.09.03' },
                    { name: 'Musuk', bpsCode: '33.09.04' },
                    { name: 'Boyolali', bpsCode: '33.09.05' },
                    { name: 'Mojosongo', bpsCode: '33.09.06' },
                    { name: 'Teras', bpsCode: '33.09.07' },
                    { name: 'Sawit', bpsCode: '33.09.08' },
                    { name: 'Banyudono', bpsCode: '33.09.09' },
                    { name: 'Sambi', bpsCode: '33.09.10' },
                    { name: 'Ngemplak', bpsCode: '33.09.11' },
                    { name: 'Nogosari', bpsCode: '33.09.12' },
                    { name: 'Simo', bpsCode: '33.09.13' },
                    { name: 'Karanggede', bpsCode: '33.09.14' },
                    { name: 'Klego', bpsCode: '33.09.15' },
                    { name: 'Andong', bpsCode: '33.09.16' },
                    { name: 'Kemusu', bpsCode: '33.09.17' },
                    { name: 'Wonosegoro', bpsCode: '33.09.18' },
                    { name: 'Juwangi', bpsCode: '33.09.19' }
                ]
            }, {
                name: 'Klaten',
                bpscode: '33.10',
                districts: [
                    { name: 'Prambanan', bpsCode: '33.10.01' },
                    { name: 'Gantiwarno', bpsCode: '33.10.02' },
                    { name: 'Wedi', bpsCode: '33.10.03' },
                    { name: 'Bayat', bpsCode: '33.10.04' },
                    { name: 'Cawas', bpsCode: '33.10.05' },
                    { name: 'Trucuk', bpsCode: '33.10.06' },
                    { name: 'Kebonarum', bpsCode: '33.10.07' },
                    { name: 'Jogonalan', bpsCode: '33.10.08' },
                    { name: 'Manisrenggo', bpsCode: '33.10.09' },
                    { name: 'Karangnongko', bpsCode: '33.10.10' },
                    { name: 'Ceper', bpsCode: '33.10.11' },
                    { name: 'Pedan', bpsCode: '33.10.12' },
                    { name: 'Karangdowo', bpsCode: '33.10.13' },
                    { name: 'Juwiring', bpsCode: '33.10.14' },
                    { name: 'Wonosari', bpsCode: '33.10.15' },
                    { name: 'Delanggu', bpsCode: '33.10.16' },
                    { name: 'Polanharjo', bpsCode: '33.10.17' },
                    { name: 'Karanganom', bpsCode: '33.10.18' },
                    { name: 'Tulung', bpsCode: '33.10.19' },
                    { name: 'Jatinom', bpsCode: '33.10.20' },
                    { name: 'Kemalang', bpsCode: '33.10.21' },
                    { name: 'Ngawen', bpsCode: '33.10.22' },
                    { name: 'Kalikotes', bpsCode: '33.10.23' },
                    { name: 'Klaten Utara', bpsCode: '33.10.24' },
                    { name: 'Klaten Tengah', bpsCode: '33.10.25' },
                    { name: 'Klaten Selatan', bpsCode: '33.10.26' }
                ]
            }, {
                name: 'Sukoharjo',
                bpscode: '33.11',
                districts: [
                    { name: 'Weru', bpsCode: '33.11.01' },
                    { name: 'Bulu', bpsCode: '33.11.02' },
                    { name: 'Tawangsari', bpsCode: '33.11.03' },
                    { name: 'Sukoharjo', bpsCode: '33.11.04' },
                    { name: 'Nguter', bpsCode: '33.11.05' },
                    { name: 'Bendosari', bpsCode: '33.11.06' },
                    { name: 'Polokarto', bpsCode: '33.11.07' },
                    { name: 'Mojolaban', bpsCode: '33.11.08' },
                    { name: 'Grogol', bpsCode: '33.11.09' },
                    { name: 'Baki', bpsCode: '33.11.10' },
                    { name: 'Gatak', bpsCode: '33.11.11' },
                    { name: 'Kartasura', bpsCode: '33.11.12' }
                ]
            }, {
                name: 'Wonogiri',
                bpscode: '33.12',
                districts: [
                    { name: 'Pracimantoro', bpsCode: '33.12.01' },
                    { name: 'Giritontro', bpsCode: '33.12.02' },
                    { name: 'Giriwoyo', bpsCode: '33.12.03' },
                    { name: 'Batuwarno', bpsCode: '33.12.04' },
                    { name: 'Tirtomoyo', bpsCode: '33.12.05' },
                    { name: 'Nguntoronadi', bpsCode: '33.12.06' },
                    { name: 'Baturetno', bpsCode: '33.12.07' },
                    { name: 'Eromoko', bpsCode: '33.12.08' },
                    { name: 'Wuryantoro', bpsCode: '33.12.09' },
                    { name: 'Manyaran', bpsCode: '33.12.10' },
                    { name: 'Selogiri', bpsCode: '33.12.11' },
                    { name: 'Wonogiri', bpsCode: '33.12.12' },
                    { name: 'Ngadirojo', bpsCode: '33.12.13' },
                    { name: 'Sidoharjo', bpsCode: '33.12.14' },
                    { name: 'Jatiroto', bpsCode: '33.12.15' },
                    { name: 'Kismantoro', bpsCode: '33.12.16' },
                    { name: 'Purwantoro', bpsCode: '33.12.17' },
                    { name: 'Bulukerto', bpsCode: '33.12.18' },
                    { name: 'Slogohimo', bpsCode: '33.12.19' },
                    { name: 'Jatisrono', bpsCode: '33.12.20' },
                    { name: 'Jatipurno', bpsCode: '33.12.21' },
                    { name: 'Girimarto', bpsCode: '33.12.22' },
                    { name: 'Karangtengah', bpsCode: '33.12.23' },
                    { name: 'Paranggupito', bpsCode: '33.12.24' },
                    { name: 'Puhpelem', bpsCode: '33.12.25' }
                ]
            }, {
                name: 'Karanganyar',
                bpscode: '33.13',
                districts: [
                    { name: 'Jatipuro', bpsCode: '33.13.01' },
                    { name: 'Jatiyoso', bpsCode: '33.13.02' },
                    { name: 'Jumapolo', bpsCode: '33.13.03' },
                    { name: 'Jumantono', bpsCode: '33.13.04' },
                    { name: 'Matesih', bpsCode: '33.13.05' },
                    { name: 'Tawangmangu', bpsCode: '33.13.06' },
                    { name: 'Ngargoyoso', bpsCode: '33.13.07' },
                    { name: 'Karangpandan', bpsCode: '33.13.08' },
                    { name: 'Karanganyar', bpsCode: '33.13.09' },
                    { name: 'Tasikmadu', bpsCode: '33.13.10' },
                    { name: 'Jaten', bpsCode: '33.13.11' },
                    { name: 'Colomadu', bpsCode: '33.13.12' },
                    { name: 'Gondangrejo', bpsCode: '33.13.13' },
                    { name: 'Kebakkramat', bpsCode: '33.13.14' },
                    { name: 'Mojogedang', bpsCode: '33.13.15' },
                    { name: 'Kerjo', bpsCode: '33.13.16' },
                    { name: 'Jenawi', bpsCode: '33.13.17' }
                ]
            }, {
                name: 'Sragen',
                bpscode: '33.14',
                districts: [
                    { name: 'Kalijambe', bpsCode: '33.14.01' },
                    { name: 'Plupuh', bpsCode: '33.14.02' },
                    { name: 'Masaran', bpsCode: '33.14.03' },
                    { name: 'Kedawung', bpsCode: '33.14.04' },
                    { name: 'Sambirejo', bpsCode: '33.14.05' },
                    { name: 'Gondang', bpsCode: '33.14.06' },
                    { name: 'Sambungmacan (Sambung Macan)', bpsCode: '33.14.07' },
                    { name: 'Ngrampal', bpsCode: '33.14.08' },
                    { name: 'Karangmalang', bpsCode: '33.14.09' },
                    { name: 'Sragen', bpsCode: '33.14.10' },
                    { name: 'Sidoharjo', bpsCode: '33.14.11' },
                    { name: 'Tanon', bpsCode: '33.14.12' },
                    { name: 'Gemolong', bpsCode: '33.14.13' },
                    { name: 'Miri', bpsCode: '33.14.14' },
                    { name: 'Sumberlawang', bpsCode: '33.14.15' },
                    { name: 'Mondokan', bpsCode: '33.14.16' },
                    { name: 'Sukodono', bpsCode: '33.14.17' },
                    { name: 'Gesi', bpsCode: '33.14.18' },
                    { name: 'Tangen', bpsCode: '33.14.19' },
                    { name: 'Jenar', bpsCode: '33.14.20' }
                ]
            }, {
                name: 'Grobogan',
                bpscode: '33.15',
                districts: [
                    { name: 'Kedungjati', bpsCode: '33.15.01' },
                    { name: 'Karangrayung', bpsCode: '33.15.02' },
                    { name: 'Penawangan', bpsCode: '33.15.03' },
                    { name: 'Toroh', bpsCode: '33.15.04' },
                    { name: 'Geyer', bpsCode: '33.15.05' },
                    { name: 'Pulokulon', bpsCode: '33.15.06' },
                    { name: 'Kradenan', bpsCode: '33.15.07' },
                    { name: 'Gabus', bpsCode: '33.15.08' },
                    { name: 'Ngaringan', bpsCode: '33.15.09' },
                    { name: 'Wirosari', bpsCode: '33.15.10' },
                    { name: 'Tawangharjo', bpsCode: '33.15.11' },
                    { name: 'Grobogan', bpsCode: '33.15.12' },
                    { name: 'Purwodadi', bpsCode: '33.15.13' },
                    { name: 'Brati', bpsCode: '33.15.14' },
                    { name: 'Klambu', bpsCode: '33.15.15' },
                    { name: 'Godong', bpsCode: '33.15.16' },
                    { name: 'Gubug', bpsCode: '33.15.17' },
                    { name: 'Tegowanu', bpsCode: '33.15.18' },
                    { name: 'Tanggungharjo', bpsCode: '33.15.19' }
                ]
            }, {
                name: 'Blora',
                bpscode: '33.16',
                districts: [
                    { name: 'Jati', bpsCode: '33.16.01' },
                    { name: 'Randublatung', bpsCode: '33.16.02' },
                    { name: 'Kradenan', bpsCode: '33.16.03' },
                    { name: 'Kedungtuban', bpsCode: '33.16.04' },
                    { name: 'Cepu', bpsCode: '33.16.05' },
                    { name: 'Sambong', bpsCode: '33.16.06' },
                    { name: 'Jiken', bpsCode: '33.16.07' },
                    { name: 'Jepon', bpsCode: '33.16.08' },
                    { name: 'Blora (Blora kota)', bpsCode: '33.16.09' },
                    { name: 'Tunjungan', bpsCode: '33.16.10' },
                    { name: 'Banjarejo', bpsCode: '33.16.11' },
                    { name: 'Ngawen', bpsCode: '33.16.12' },
                    { name: 'Kunduran', bpsCode: '33.16.13' },
                    { name: 'Todanan', bpsCode: '33.16.14' },
                    { name: 'Bogorejo', bpsCode: '33.16.15' },
                    { name: 'Japah', bpsCode: '33.16.16' }
                ]
            }, {
                name: 'Rembang',
                bpscode: '33.17',
                districts: [
                    { name: 'Sumber', bpsCode: '33.17.01' },
                    { name: 'Bulu', bpsCode: '33.17.02' },
                    { name: 'Gunem', bpsCode: '33.17.03' },
                    { name: 'Sale', bpsCode: '33.17.04' },
                    { name: 'Sarang', bpsCode: '33.17.05' },
                    { name: 'Sedan', bpsCode: '33.17.06' },
                    { name: 'Pamotan', bpsCode: '33.17.07' },
                    { name: 'Sulang', bpsCode: '33.17.08' },
                    { name: 'Kaliori', bpsCode: '33.17.09' },
                    { name: 'Rembang', bpsCode: '33.17.10' },
                    { name: 'Pancur', bpsCode: '33.17.11' },
                    { name: 'Kragan', bpsCode: '33.17.12' },
                    { name: 'Sluke', bpsCode: '33.17.13' },
                    { name: 'Lasem', bpsCode: '33.17.14' }
                ]
            }, {
                name: 'Pati',
                bpscode: '33.18',
                districts: [
                    { name: 'Sukolilo', bpsCode: '33.18.01' },
                    { name: 'Kayen', bpsCode: '33.18.02' },
                    { name: 'Tambakromo', bpsCode: '33.18.03' },
                    { name: 'Winong', bpsCode: '33.18.04' },
                    { name: 'Pucakwangi', bpsCode: '33.18.05' },
                    { name: 'Jaken', bpsCode: '33.18.06' },
                    { name: 'Batangan', bpsCode: '33.18.07' },
                    { name: 'Juwana', bpsCode: '33.18.08' },
                    { name: 'Jakenan', bpsCode: '33.18.09' },
                    { name: 'Pati', bpsCode: '33.18.10' },
                    { name: 'Gabus', bpsCode: '33.18.11' },
                    { name: 'Margorejo', bpsCode: '33.18.12' },
                    { name: 'Gembong', bpsCode: '33.18.13' },
                    { name: 'Tlogowungu', bpsCode: '33.18.14' },
                    { name: 'Wedarijaksa', bpsCode: '33.18.15' },
                    { name: 'Margoyoso', bpsCode: '33.18.16' },
                    { name: 'Gunungwungkal', bpsCode: '33.18.17' },
                    { name: 'Cluwak', bpsCode: '33.18.18' },
                    { name: 'Tayu', bpsCode: '33.18.19' },
                    { name: 'Dukuhseti', bpsCode: '33.18.20' },
                    { name: 'Trangkil', bpsCode: '33.18.21' }
                ]
            }, {
                name: 'Kudus',
                bpscode: '33.19',
                districts: [
                    { name: 'Kaliwungu', bpsCode: '33.19.01' },
                    { name: 'Kota Kudus (Kudus Kota)', bpsCode: '33.19.02' },
                    { name: 'Jati', bpsCode: '33.19.03' },
                    { name: 'Undaan', bpsCode: '33.19.04' },
                    { name: 'Mejobo', bpsCode: '33.19.05' },
                    { name: 'Jekulo', bpsCode: '33.19.06' },
                    { name: 'Bae', bpsCode: '33.19.07' },
                    { name: 'Gebog', bpsCode: '33.19.08' },
                    { name: 'Dawe', bpsCode: '33.19.09' }
                ]
            }, {
                name: 'Jepara',
                bpscode: '33.20',
                districts: [
                    { name: 'Kedung', bpsCode: '33.20.01' },
                    { name: 'Pecangaan', bpsCode: '33.20.02' },
                    { name: 'Welahan', bpsCode: '33.20.03' },
                    { name: 'Mayong', bpsCode: '33.20.04' },
                    { name: 'Batealit', bpsCode: '33.20.05' },
                    { name: 'Jepara', bpsCode: '33.20.06' },
                    { name: 'Mlonggo', bpsCode: '33.20.07' },
                    { name: 'Bangsri', bpsCode: '33.20.08' },
                    { name: 'Keling', bpsCode: '33.20.09' },
                    { name: 'Karimun Jawa (Karimunjawa)', bpsCode: '33.20.10' },
                    { name: 'Tahunan', bpsCode: '33.20.11' },
                    { name: 'Nalumsari', bpsCode: '33.20.12' },
                    { name: 'Kalinyamatan', bpsCode: '33.20.13' },
                    { name: 'Kembang', bpsCode: '33.20.14' },
                    { name: 'Pakis Aji', bpsCode: '33.20.15' },
                    { name: 'Donorojo', bpsCode: '33.20.16' }
                ]
            }, {
                name: 'Demak',
                bpscode: '33.21',
                districts: [
                    { name: 'Mranggen', bpsCode: '33.21.01' },
                    { name: 'Karangawen', bpsCode: '33.21.02' },
                    { name: 'Guntur', bpsCode: '33.21.03' },
                    { name: 'Sayung', bpsCode: '33.21.04' },
                    { name: 'Karangtengah (Karang Tengah)', bpsCode: '33.21.05' },
                    { name: 'Wonosalam', bpsCode: '33.21.06' },
                    { name: 'Dempet', bpsCode: '33.21.07' },
                    { name: 'Gajah', bpsCode: '33.21.08' },
                    { name: 'Karanganyar', bpsCode: '33.21.09' },
                    { name: 'Mijen', bpsCode: '33.21.10' },
                    { name: 'Demak', bpsCode: '33.21.11' },
                    { name: 'Bonang', bpsCode: '33.21.12' },
                    { name: 'Wedung', bpsCode: '33.21.13' },
                    { name: 'Kebonagung', bpsCode: '33.21.14' }
                ]
            }, {
                name: 'Semarang',
                bpscode: '33.22',
                districts: [
                    { name: 'Getasan', bpsCode: '33.22.01' },
                    { name: 'Tengaran', bpsCode: '33.22.02' },
                    { name: 'Susukan', bpsCode: '33.22.03' },
                    { name: 'Suruh', bpsCode: '33.22.04' },
                    { name: 'Pabelan', bpsCode: '33.22.05' },
                    { name: 'Tuntang', bpsCode: '33.22.06' },
                    { name: 'Banyubiru', bpsCode: '33.22.07' },
                    { name: 'Jambu', bpsCode: '33.22.08' },
                    { name: 'Sumowono', bpsCode: '33.22.09' },
                    { name: 'Ambarawa', bpsCode: '33.22.10' },
                    { name: 'Bawen', bpsCode: '33.22.11' },
                    { name: 'Bringin', bpsCode: '33.22.12' },
                    { name: 'Bergas', bpsCode: '33.22.13' },
                    { name: 'Pringapus', bpsCode: '33.22.15' },
                    { name: 'Bancak', bpsCode: '33.22.16' },
                    { name: 'Kaliwungu', bpsCode: '33.22.17' },
                    { name: 'Ungaran Barat', bpsCode: '33.22.18' },
                    { name: 'Ungaran Timur', bpsCode: '33.22.19' },
                    { name: 'Bandungan', bpsCode: '33.22.20' }
                ]
            }, {
                name: 'Temanggung',
                bpscode: '33.23',
                districts: [
                    { name: 'Bulu', bpsCode: '33.23.01' },
                    { name: 'Tembarak', bpsCode: '33.23.02' },
                    { name: 'Temanggung', bpsCode: '33.23.03' },
                    { name: 'Pringsurat', bpsCode: '33.23.04' },
                    { name: 'Kaloran', bpsCode: '33.23.05' },
                    { name: 'Kandangan', bpsCode: '33.23.06' },
                    { name: 'Kedu', bpsCode: '33.23.07' },
                    { name: 'Parakan', bpsCode: '33.23.08' },
                    { name: 'Ngadirejo', bpsCode: '33.23.09' },
                    { name: 'Jumo', bpsCode: '33.23.10' },
                    { name: 'Tretep', bpsCode: '33.23.11' },
                    { name: 'Candiroto', bpsCode: '33.23.12' },
                    { name: 'Kranggan', bpsCode: '33.23.13' },
                    { name: 'Tlogomulyo', bpsCode: '33.23.14' },
                    { name: 'Selopampang', bpsCode: '33.23.15' },
                    { name: 'Bansari', bpsCode: '33.23.16' },
                    { name: 'Kledung', bpsCode: '33.23.17' },
                    { name: 'Bejen', bpsCode: '33.23.18' },
                    { name: 'Wonoboyo', bpsCode: '33.23.19' },
                    { name: 'Gemawang', bpsCode: '33.23.20' }
                ]
            }, {
                name: 'Kendal',
                bpscode: '33.24',
                districts: [
                    { name: 'Plantungan', bpsCode: '33.24.01' },
                    { name: 'Pageruyung (Pagerruyung)', bpsCode: '33.24.02' },
                    { name: 'Sukorejo', bpsCode: '33.24.03' },
                    { name: 'Patean', bpsCode: '33.24.04' },
                    { name: 'Singorojo', bpsCode: '33.24.05' },
                    { name: 'Limbangan', bpsCode: '33.24.06' },
                    { name: 'Boja', bpsCode: '33.24.07' },
                    { name: 'Kaliwungu', bpsCode: '33.24.08' },
                    { name: 'Brangsong', bpsCode: '33.24.09' },
                    { name: 'Pegandon', bpsCode: '33.24.10' },
                    { name: 'Gemuh', bpsCode: '33.24.11' },
                    { name: 'Weleri', bpsCode: '33.24.12' },
                    { name: 'Cepiring', bpsCode: '33.24.13' },
                    { name: 'Patebon', bpsCode: '33.24.14' },
                    { name: 'Kendal', bpsCode: '33.24.15' },
                    { name: 'Rowosari', bpsCode: '33.24.16' },
                    { name: 'Kangkung', bpsCode: '33.24.17' },
                    { name: 'Ringinarum', bpsCode: '33.24.18' },
                    { name: 'Ngampel', bpsCode: '33.24.19' },
                    { name: 'Kaliwungu Selatan', bpsCode: '33.24.20' }
                ]
            }, {
                name: 'Batang',
                bpscode: '33.25',
                districts: [
                    { name: 'Wonotunggal', bpsCode: '33.25.01' },
                    { name: 'Bandar', bpsCode: '33.25.02' },
                    { name: 'Blado', bpsCode: '33.25.03' },
                    { name: 'Reban', bpsCode: '33.25.04' },
                    { name: 'Bawang', bpsCode: '33.25.05' },
                    { name: 'Tersono', bpsCode: '33.25.06' },
                    { name: 'Gringsing', bpsCode: '33.25.07' },
                    { name: 'Limpung', bpsCode: '33.25.08' },
                    { name: 'Subah', bpsCode: '33.25.09' },
                    { name: 'Tulis', bpsCode: '33.25.10' },
                    { name: 'Batang', bpsCode: '33.25.11' },
                    { name: 'Warungasem', bpsCode: '33.25.12' },
                    { name: 'Kandeman', bpsCode: '33.25.13' },
                    { name: 'Pecalungan', bpsCode: '33.25.14' },
                    { name: 'Banyuputih', bpsCode: '33.25.15' }
                ]
            }, {
                name: 'Pekalongan',
                bpscode: '33.26',
                districts: [
                    { name: 'Kandangserang', bpsCode: '33.26.01' },
                    { name: 'Paninggaran', bpsCode: '33.26.02' },
                    { name: 'Lebakbarang', bpsCode: '33.26.03' },
                    { name: 'Petungkriono/Petungkriyono', bpsCode: '33.26.04' },
                    { name: 'Talun', bpsCode: '33.26.05' },
                    { name: 'Doro', bpsCode: '33.26.06' },
                    { name: 'Karanganyar', bpsCode: '33.26.07' },
                    { name: 'Kajen', bpsCode: '33.26.08' },
                    { name: 'Kesesi', bpsCode: '33.26.09' },
                    { name: 'Sragi', bpsCode: '33.26.10' },
                    { name: 'Bojong', bpsCode: '33.26.11' },
                    { name: 'Wonopringgo', bpsCode: '33.26.12' },
                    { name: 'Kedungwuni', bpsCode: '33.26.13' },
                    { name: 'Buaran', bpsCode: '33.26.14' },
                    { name: 'Tirto', bpsCode: '33.26.15' },
                    { name: 'Wiradesa', bpsCode: '33.26.16' },
                    { name: 'Siwalan', bpsCode: '33.26.17' },
                    { name: 'Karangdadap', bpsCode: '33.26.18' },
                    { name: 'Wonokerto', bpsCode: '33.26.19' }
                ]
            }, {
                name: 'Pemalang',
                bpscode: '33.27',
                districts: [
                    { name: 'Moga', bpsCode: '33.27.01' },
                    { name: 'Pulosari', bpsCode: '33.27.02' },
                    { name: 'Belik', bpsCode: '33.27.03' },
                    { name: 'Watukumpul', bpsCode: '33.27.04' },
                    { name: 'Bodeh', bpsCode: '33.27.05' },
                    { name: 'Bantarbolang', bpsCode: '33.27.06' },
                    { name: 'Randudongkal', bpsCode: '33.27.07' },
                    { name: 'Pemalang', bpsCode: '33.27.08' },
                    { name: 'Taman', bpsCode: '33.27.09' },
                    { name: 'Petarukan', bpsCode: '33.27.10' },
                    { name: 'Ampelgading', bpsCode: '33.27.11' },
                    { name: 'Comal', bpsCode: '33.27.12' },
                    { name: 'Ulujami', bpsCode: '33.27.13' },
                    { name: 'Warungpring', bpsCode: '33.27.14' }
                ]
            }, {
                name: 'Tegal',
                bpscode: '33.28',
                districts: [
                    { name: 'Margasari', bpsCode: '33.28.01' },
                    { name: 'Bumijawa', bpsCode: '33.28.02' },
                    { name: 'Bojong', bpsCode: '33.28.03' },
                    { name: 'Balapulang', bpsCode: '33.28.04' },
                    { name: 'Pagerbarang', bpsCode: '33.28.05' },
                    { name: 'Lebaksiu', bpsCode: '33.28.06' },
                    { name: 'Jatinegara', bpsCode: '33.28.07' },
                    { name: 'Kedungbanteng (Kedung Banteng)', bpsCode: '33.28.08' },
                    { name: 'Pangkah', bpsCode: '33.28.09' },
                    { name: 'Slawi', bpsCode: '33.28.10' },
                    { name: 'Adiwerna', bpsCode: '33.28.11' },
                    { name: 'Talang', bpsCode: '33.28.12' },
                    { name: 'Dukuhturi', bpsCode: '33.28.13' },
                    { name: 'Tarub', bpsCode: '33.28.14' },
                    { name: 'Kramat', bpsCode: '33.28.15' },
                    { name: 'Suradadi (Surodadi)', bpsCode: '33.28.16' },
                    { name: 'Warureja (Warurejo)', bpsCode: '33.28.17' },
                    { name: 'Dukuhwaru', bpsCode: '33.28.18' }
                ]
            }, {
                name: 'Brebes',
                bpscode: '33.29',
                districts: [
                    { name: 'Salem', bpsCode: '33.29.01' },
                    { name: 'Bantarkawung', bpsCode: '33.29.02' },
                    { name: 'Bumiayu', bpsCode: '33.29.03' },
                    { name: 'Paguyangan', bpsCode: '33.29.04' },
                    { name: 'Sirampog', bpsCode: '33.29.05' },
                    { name: 'Tonjong', bpsCode: '33.29.06' },
                    { name: 'Jatibarang', bpsCode: '33.29.07' },
                    { name: 'Wanasari', bpsCode: '33.29.08' },
                    { name: 'Brebes', bpsCode: '33.29.09' },
                    { name: 'Songgom', bpsCode: '33.29.10' },
                    { name: 'Kersana', bpsCode: '33.29.11' },
                    { name: 'Losari', bpsCode: '33.29.12' },
                    { name: 'Tanjung', bpsCode: '33.29.13' },
                    { name: 'Bulakamba', bpsCode: '33.29.14' },
                    { name: 'Larangan', bpsCode: '33.29.15' },
                    { name: 'Ketanggungan', bpsCode: '33.29.16' },
                    { name: 'Banjarharjo', bpsCode: '33.29.17' }
                ]
            }, {
                name: 'Magelang',
                bpscode: '33.71',
                districts: [
                    { name: 'Magelang Selatan', bpsCode: '33.71.01' },
                    { name: 'Magelang Utara', bpsCode: '33.71.02' },
                    { name: 'Magelang Tengah', bpsCode: '33.71.03' }
                ]
            }, {
                name: 'Surakarta',
                bpscode: '33.72',
                districts: [
                    { name: 'Laweyan', bpsCode: '33.72.01' },
                    { name: 'Serengan', bpsCode: '33.72.02' },
                    { name: 'Pasar Kliwon', bpsCode: '33.72.03' },
                    { name: 'Jebres', bpsCode: '33.72.04' },
                    { name: 'Banjarsari', bpsCode: '33.72.05' }
                ]
            }, {
                name: 'Salatiga',
                bpscode: '33.73',
                districts: [
                    { name: 'Sidorejo', bpsCode: '33.73.01' },
                    { name: 'Tingkir', bpsCode: '33.73.02' },
                    { name: 'Argomulyo', bpsCode: '33.73.03' },
                    { name: 'Sidomukti', bpsCode: '33.73.04' }
                ]
            }, {
                name: 'Semarang',
                bpscode: '33.74',
                districts: [
                    { name: 'Semarang Tengah', bpsCode: '33.74.01' },
                    { name: 'Semarang Utara', bpsCode: '33.74.02' },
                    { name: 'Semarang Timur', bpsCode: '33.74.03' },
                    { name: 'Gayamsari', bpsCode: '33.74.04' },
                    { name: 'Genuk', bpsCode: '33.74.05' },
                    { name: 'Pedurungan', bpsCode: '33.74.06' },
                    { name: 'Semarang Selatan', bpsCode: '33.74.07' },
                    { name: 'Candisari', bpsCode: '33.74.08' },
                    { name: 'Gajahmungkur (Gajah Mungkur)', bpsCode: '33.74.09' },
                    { name: 'Tembalang', bpsCode: '33.74.10' },
                    { name: 'Banyumanik', bpsCode: '33.74.11' },
                    { name: 'Gunungpati', bpsCode: '33.74.12' },
                    { name: 'Semarang Barat', bpsCode: '33.74.13' },
                    { name: 'Mijen', bpsCode: '33.74.14' },
                    { name: 'Ngaliyan', bpsCode: '33.74.15' },
                    { name: 'Tugu', bpsCode: '33.74.16' }
                ]
            }, {
                name: 'Pekalongan',
                bpscode: '33.75',
                districts: [
                    { name: 'Pekalongan Barat', bpsCode: '33.75.01' },
                    { name: 'Pekalongan Timur', bpsCode: '33.75.02' },
                    { name: 'Pekalongan Utara', bpsCode: '33.75.03' },
                    { name: 'Pekalongan Selatan', bpsCode: '33.75.04' }
                ]
            }, {
                name: 'Tegal',
                bpscode: '33.76',
                districts: [
                    { name: 'Tegal Barat', bpsCode: '33.76.01' },
                    { name: 'Tegal Timur', bpsCode: '33.76.02' },
                    { name: 'Tegal Selatan', bpsCode: '33.76.03' },
                    { name: 'Margadana', bpsCode: '33.76.04' }
                ]
            }
        ]
    },
    KB: {
        regencies: [
            {
                name: 'Sambas',
                bpscode: '61.01',
                districts: [
                    { name: 'Sambas', bpsCode: '61.01.01' },
                    { name: 'Teluk Keramat', bpsCode: '61.01.02' },
                    { name: 'Jawai', bpsCode: '61.01.03' },
                    { name: 'Tebas', bpsCode: '61.01.04' },
                    { name: 'Pemangkat', bpsCode: '61.01.05' },
                    { name: 'Sejangkung', bpsCode: '61.01.06' },
                    { name: 'Selakau', bpsCode: '61.01.07' },
                    { name: 'Paloh', bpsCode: '61.01.08' },
                    { name: 'Sajingan Besar', bpsCode: '61.01.09' },
                    { name: 'Subah', bpsCode: '61.01.10' },
                    { name: 'Galing', bpsCode: '61.01.11' },
                    { name: 'Tekarang', bpsCode: '61.01.12' },
                    { name: 'Semparuk', bpsCode: '61.01.13' },
                    { name: 'Sajad', bpsCode: '61.01.14' },
                    { name: 'Sebawi', bpsCode: '61.01.15' },
                    { name: 'Jawai Selatan', bpsCode: '61.01.16' },
                    { name: 'Tangaran', bpsCode: '61.01.17' },
                    { name: 'Salatiga', bpsCode: '61.01.18' },
                    { name: 'Selakau Timur', bpsCode: '61.01.19' }
                ]
            }, {
                name: 'Mempawah',
                bpscode: '61.02',
                districts: [
                    { name: 'Mempawah Hilir', bpsCode: '61.02.01' },
                    { name: 'Toho', bpsCode: '61.02.06' },
                    { name: 'Sei/Sungai Pinyuh', bpsCode: '61.02.07' },
                    { name: 'Siantan', bpsCode: '61.02.08' },
                    { name: 'Sei/Sungai Kunyit', bpsCode: '61.02.12' },
                    { name: 'Segedong', bpsCode: '61.02.15' },
                    { name: 'Anjongan', bpsCode: '61.02.16' },
                    { name: 'Sadaniang', bpsCode: '61.02.17' },
                    { name: 'Mempawah Timur', bpsCode: '61.02.18' }
                ]
            }, {
                name: 'Sanggau',
                bpscode: '61.03',
                districts: [
                    { name: 'Kapuas (Sanggau Kapuas)', bpsCode: '61.03.01' },
                    { name: 'Mukok', bpsCode: '61.03.02' },
                    { name: 'Noyan', bpsCode: '61.03.03' },
                    { name: 'Jangkang', bpsCode: '61.03.04' },
                    { name: 'Bonti', bpsCode: '61.03.05' },
                    { name: 'Beduai (Beduwai)', bpsCode: '61.03.06' },
                    { name: 'Sekayam', bpsCode: '61.03.07' },
                    { name: 'Kembayan', bpsCode: '61.03.08' },
                    { name: 'Parindu', bpsCode: '61.03.09' },
                    { name: 'Tayan Hulu', bpsCode: '61.03.10' },
                    { name: 'Tayan Hilir', bpsCode: '61.03.11' },
                    { name: 'Balai', bpsCode: '61.03.12' },
                    { name: 'Toba', bpsCode: '61.03.13' },
                    { name: 'Meliau', bpsCode: '61.03.20' },
                    { name: 'Entikong', bpsCode: '61.03.21' }
                ]
            }, {
                name: 'Ketapang',
                bpscode: '61.04',
                districts: [
                    { name: 'Matan Hilir Utara', bpsCode: '61.04.01' },
                    { name: 'Marau', bpsCode: '61.04.02' },
                    { name: 'Manis Mata', bpsCode: '61.04.03' },
                    { name: 'Kendawangan', bpsCode: '61.04.04' },
                    { name: 'Sandai', bpsCode: '61.04.05' },
                    { name: 'Sungai Laur', bpsCode: '61.04.07' },
                    { name: 'Simpang Hulu', bpsCode: '61.04.08' },
                    { name: 'Nanga Tayap', bpsCode: '61.04.11' },
                    { name: 'Matan Hilir Selatan', bpsCode: '61.04.12' },
                    { name: 'Tumbang Titi', bpsCode: '61.04.13' },
                    { name: 'Jelai Hulu', bpsCode: '61.04.14' },
                    { name: 'Delta Pawan', bpsCode: '61.04.16' },
                    { name: 'Muara Pawan', bpsCode: '61.04.17' },
                    { name: 'Benua Kayong', bpsCode: '61.04.18' },
                    { name: 'Hulu Sungai', bpsCode: '61.04.19' },
                    { name: 'Simpang Dua', bpsCode: '61.04.20' },
                    { name: 'Air Upas', bpsCode: '61.04.21' },
                    { name: 'Singkup', bpsCode: '61.04.22' },
                    { name: 'Pemahan', bpsCode: '61.04.24' },
                    { name: 'Sungai Melayu Rayak', bpsCode: '61.04.25' }
                ]
            }, {
                name: 'Sintang',
                bpscode: '61.05',
                districts: [
                    { name: 'Sintang', bpsCode: '61.05.01' },
                    { name: 'Tempunak', bpsCode: '61.05.02' },
                    { name: 'Sepauk', bpsCode: '61.05.03' },
                    { name: 'Ketungau Hilir', bpsCode: '61.05.04' },
                    { name: 'Ketungau Tengah', bpsCode: '61.05.05' },
                    { name: 'Ketungau Hulu', bpsCode: '61.05.06' },
                    { name: 'Dedai', bpsCode: '61.05.07' },
                    { name: 'Kayan Hilir', bpsCode: '61.05.08' },
                    { name: 'Kayan Hulu', bpsCode: '61.05.09' },
                    { name: 'Serawai', bpsCode: '61.05.14' },
                    { name: 'Ambalau', bpsCode: '61.05.15' },
                    { name: 'Kelam Permai', bpsCode: '61.05.19' },
                    { name: 'Sungai Tebelian', bpsCode: '61.05.20' },
                    { name: 'Binjai Hulu', bpsCode: '61.05.21' }
                ]
            }, {
                name: 'Kapuas Hulu',
                bpscode: '61.06',
                districts: [
                    { name: 'Putussibau Utara', bpsCode: '61.06.01' },
                    { name: 'Bika', bpsCode: '61.06.02' },
                    { name: 'Embaloh Hilir', bpsCode: '61.06.03' },
                    { name: 'Embaloh Hulu', bpsCode: '61.06.04' },
                    { name: 'Bunut Hilir', bpsCode: '61.06.05' },
                    { name: 'Bunut Hulu', bpsCode: '61.06.06' },
                    { name: 'Jongkong (Jengkong)', bpsCode: '61.06.07' },
                    { name: 'Hulu Gurung', bpsCode: '61.06.08' },
                    { name: 'Selimbau', bpsCode: '61.06.09' },
                    { name: 'Semitau', bpsCode: '61.06.10' },
                    { name: 'Seberuang', bpsCode: '61.06.11' },
                    { name: 'Batang Lupar', bpsCode: '61.06.12' },
                    { name: 'Empanang', bpsCode: '61.06.13' },
                    { name: 'Badau', bpsCode: '61.06.14' },
                    { name: 'Silat Hilir', bpsCode: '61.06.15' },
                    { name: 'Silat Hulu', bpsCode: '61.06.16' },
                    { name: 'Putussibau Selatan', bpsCode: '61.06.17' },
                    { name: 'Kalis', bpsCode: '61.06.18' },
                    { name: 'Boyan Tanjung', bpsCode: '61.06.19' },
                    { name: 'Mentebah', bpsCode: '61.06.20' },
                    { name: 'Pengkadan (Batu Datu)', bpsCode: '61.06.21' },
                    { name: 'Suhaid', bpsCode: '61.06.22' },
                    { name: 'Puring Kencana', bpsCode: '61.06.23' }
                ]
            }, {
                name: 'Bengkayang',
                bpscode: '61.07',
                districts: [
                    { name: 'Sungai Raya', bpsCode: '61.07.01' },
                    { name: 'Samalantan', bpsCode: '61.07.02' },
                    { name: 'Ledo', bpsCode: '61.07.03' },
                    { name: 'Bengkayang', bpsCode: '61.07.04' },
                    { name: 'Seluas', bpsCode: '61.07.05' },
                    { name: 'Sanggau Ledo', bpsCode: '61.07.06' },
                    { name: 'Jagoi Babang', bpsCode: '61.07.07' },
                    { name: 'Monterado', bpsCode: '61.07.08' },
                    { name: 'Teriak', bpsCode: '61.07.09' },
                    { name: 'Suti Semarang', bpsCode: '61.07.10' },
                    { name: 'Capkala', bpsCode: '61.07.11' },
                    { name: 'Siding', bpsCode: '61.07.12' },
                    { name: 'Lumar', bpsCode: '61.07.13' },
                    { name: 'Sungai Betung', bpsCode: '61.07.14' },
                    { name: 'Sungai Raya Kepulauan', bpsCode: '61.07.15' },
                    { name: 'Lembah Bawang', bpsCode: '61.07.16' },
                    { name: 'Tujuh Belas', bpsCode: '61.07.17' }
                ]
            }, {
                name: 'Landak',
                bpscode: '61.08',
                districts: [
                    { name: 'Ngabang', bpsCode: '61.08.01' },
                    { name: 'Mempawah Hulu', bpsCode: '61.08.02' },
                    { name: 'Menjalin', bpsCode: '61.08.03' },
                    { name: 'Mandor', bpsCode: '61.08.04' },
                    { name: 'Air Besar', bpsCode: '61.08.05' },
                    { name: 'Menyuke', bpsCode: '61.08.06' },
                    { name: 'Sengah Temila', bpsCode: '61.08.07' },
                    { name: 'Meranti', bpsCode: '61.08.08' },
                    { name: 'Kuala Behe', bpsCode: '61.08.09' },
                    { name: 'Sebangki', bpsCode: '61.08.10' },
                    { name: 'Jelimpo', bpsCode: '61.08.11' },
                    { name: 'Banyuke Hulu', bpsCode: '61.08.12' },
                    { name: 'Sompak', bpsCode: '61.08.13' }
                ]
            }, {
                name: 'Sekadau',
                bpscode: '61.09',
                districts: [
                    { name: 'Sekadau Hilir', bpsCode: '61.09.01' },
                    { name: 'Sekadau Hulu', bpsCode: '61.09.02' },
                    { name: 'Nanga Taman', bpsCode: '61.09.03' },
                    { name: 'Nanga Mahap', bpsCode: '61.09.04' },
                    { name: 'Belitang Hilir', bpsCode: '61.09.05' },
                    { name: 'Belitang Hulu', bpsCode: '61.09.06' },
                    { name: 'Belitang', bpsCode: '61.09.07' }
                ]
            }, {
                name: 'Melawi',
                bpscode: '61.10',
                districts: [
                    { name: 'Belimbing', bpsCode: '61.10.01' },
                    { name: 'Nanga Pinoh', bpsCode: '61.10.02' },
                    { name: 'Ella Hilir', bpsCode: '61.10.03' },
                    { name: 'Menukung', bpsCode: '61.10.04' },
                    { name: 'Sayan', bpsCode: '61.10.05' },
                    { name: 'Tanah Pinoh', bpsCode: '61.10.06' },
                    { name: 'Sokan', bpsCode: '61.10.07' },
                    { name: 'Pinoh Utara', bpsCode: '61.10.08' },
                    { name: 'Pinoh Selatan', bpsCode: '61.10.09' },
                    { name: 'Belimbing Hulu', bpsCode: '61.10.10' },
                    { name: 'Tanah Pinoh Barat', bpsCode: '61.10.11' }
                ]
            }, {
                name: 'Kayong Utara',
                bpscode: '61.11',
                districts: [
                    { name: 'Sukadana', bpsCode: '61.11.01' },
                    { name: 'Simpang Hilir', bpsCode: '61.11.02' },
                    { name: 'Teluk Batang', bpsCode: '61.11.03' },
                    { name: 'Pulau Maya (Pulau Maya Karimata)', bpsCode: '61.11.04' },
                    { name: 'Seponti', bpsCode: '61.11.05' },
                    { name: 'Kepulauan Karimata', bpsCode: '61.11.06' }
                ]
            }, {
                name: 'Kubu Raya',
                bpscode: '61.12',
                districts: [
                    { name: 'Sungai Raya', bpsCode: '61.12.01' },
                    { name: 'Kuala Mandor B', bpsCode: '61.12.02' },
                    { name: 'Sungai Ambawang', bpsCode: '61.12.03' },
                    { name: 'Terentang', bpsCode: '61.12.04' },
                    { name: 'Batu Ampar', bpsCode: '61.12.05' },
                    { name: 'Kubu', bpsCode: '61.12.06' },
                    { name: 'Rasau Jaya', bpsCode: '61.12.07' },
                    { name: 'Teluk Pakedai', bpsCode: '61.12.08' },
                    { name: 'Sungai Kakap', bpsCode: '61.12.09' }
                ]
            }, {
                name: 'Pontianak',
                bpscode: '61.71',
                districts: [
                    { name: 'Pontianak Selatan', bpsCode: '61.71.01' },
                    { name: 'Pontianak Timur', bpsCode: '61.71.02' },
                    { name: 'Pontianak Barat', bpsCode: '61.71.03' },
                    { name: 'Pontianak Utara', bpsCode: '61.71.04' },
                    { name: 'Pontianak Kota', bpsCode: '61.71.05' },
                    { name: 'Pontianak Tenggara', bpsCode: '61.71.06' }
                ]
            }, {
                name: 'Singkawang',
                bpscode: '61.72',
                districts: [
                    { name: 'Singkawang Tengah', bpsCode: '61.72.01' },
                    { name: 'Singkawang Barat', bpsCode: '61.72.02' },
                    { name: 'Singkawang Timur', bpsCode: '61.72.03' },
                    { name: 'Singkawang Utara', bpsCode: '61.72.04' },
                    { name: 'Singkawang Selatan', bpsCode: '61.72.05' }
                ]
            }
        ]
    },
    KI: {
        regencies: [
            {
                name: 'Paser',
                bpscode: '64.01',
                districts: [
                    { name: 'Batu Sopang', bpsCode: '64.01.01' },
                    { name: 'Tanjung Harapan', bpsCode: '64.01.02' },
                    { name: 'Paser Belengkong (Pasir Belengkong)', bpsCode: '64.01.03' },
                    { name: 'Tanah Grogot', bpsCode: '64.01.04' },
                    { name: 'Kuaro', bpsCode: '64.01.05' },
                    { name: 'Long Ikis', bpsCode: '64.01.06' },
                    { name: 'Muara Komam', bpsCode: '64.01.07' },
                    { name: 'Long Kali', bpsCode: '64.01.08' },
                    { name: 'Batu Engau', bpsCode: '64.01.09' },
                    { name: 'Muara Samu', bpsCode: '64.01.10' }
                ]
            }, {
                name: 'Kutai Kartanegara',
                bpscode: '64.02',
                districts: [
                    { name: 'Muara Muntai', bpsCode: '64.02.01' },
                    { name: 'Loa Kulu', bpsCode: '64.02.02' },
                    { name: 'Loa Janan', bpsCode: '64.02.03' },
                    { name: 'Anggana', bpsCode: '64.02.04' },
                    { name: 'Muara Badak', bpsCode: '64.02.05' },
                    { name: 'Tenggarong', bpsCode: '64.02.06' },
                    { name: 'Sebulu', bpsCode: '64.02.07' },
                    { name: 'Kota Bangun', bpsCode: '64.02.08' },
                    { name: 'Kenohan', bpsCode: '64.02.09' },
                    { name: 'Kembang Janggut', bpsCode: '64.02.10' },
                    { name: 'Muara Kaman', bpsCode: '64.02.11' },
                    { name: 'Tabang', bpsCode: '64.02.12' },
                    { name: 'Samboja (Semboja)', bpsCode: '64.02.13' },
                    { name: 'Muara Jawa', bpsCode: '64.02.14' },
                    { name: 'Sanga-Sanga', bpsCode: '64.02.15' },
                    { name: 'Tenggarong Seberang', bpsCode: '64.02.16' },
                    { name: 'Marang Kayu', bpsCode: '64.02.17' },
                    { name: 'Muara Wis', bpsCode: '64.02.18' }
                ]
            }, {
                name: 'Berau',
                bpscode: '64.03',
                districts: [
                    { name: 'Kelay', bpsCode: '64.03.01' },
                    { name: 'Talisayan', bpsCode: '64.03.02' },
                    { name: 'Sambaliung', bpsCode: '64.03.03' },
                    { name: 'Segah', bpsCode: '64.03.04' },
                    { name: 'Tanjung Redeb', bpsCode: '64.03.05' },
                    { name: 'Gunung Tabur', bpsCode: '64.03.06' },
                    { name: 'Pulau Derawan', bpsCode: '64.03.07' },
                    { name: 'Biduk-Biduk', bpsCode: '64.03.08' },
                    { name: 'Teluk Bayur', bpsCode: '64.03.09' },
                    { name: 'Tabalar', bpsCode: '64.03.10' },
                    { name: 'Maratua', bpsCode: '64.03.11' },
                    { name: 'Batu Putih', bpsCode: '64.03.12' },
                    { name: 'Biatan', bpsCode: '64.03.13' }
                ]
            }, {
                name: 'Kutai Barat',
                bpscode: '64.07',
                districts: [
                    { name: 'Long Iram', bpsCode: '64.07.05' },
                    { name: 'Melak', bpsCode: '64.07.06' },
                    { name: 'Barong Tongkok', bpsCode: '64.07.07' },
                    { name: 'Damai', bpsCode: '64.07.08' },
                    { name: 'Muara Lawa', bpsCode: '64.07.09' },
                    { name: 'Muara Pahu', bpsCode: '64.07.10' },
                    { name: 'Jempang', bpsCode: '64.07.11' },
                    { name: 'Bongan', bpsCode: '64.07.12' },
                    { name: 'Penyinggahan', bpsCode: '64.07.13' },
                    { name: 'Bentian Besar', bpsCode: '64.07.14' },
                    { name: 'Linggang Bigung', bpsCode: '64.07.15' },
                    { name: 'Nyuatan', bpsCode: '64.07.16' },
                    { name: 'Siluq Ngurai', bpsCode: '64.07.17' },
                    { name: 'Mook Manaar Bulatn', bpsCode: '64.07.18' },
                    { name: 'Tering', bpsCode: '64.07.19' },
                    { name: 'Sekolaq Darat', bpsCode: '64.07.20' }
                ]
            }, {
                name: 'Kutai Timur',
                bpscode: '64.08',
                districts: [
                    { name: 'Muara Ancalong', bpsCode: '64.08.01' },
                    { name: 'Muara Wahau', bpsCode: '64.08.02' },
                    { name: 'Muara Bengkal', bpsCode: '64.08.03' },
                    { name: 'Sangatta Utara', bpsCode: '64.08.04' },
                    { name: 'Sangkulirang', bpsCode: '64.08.05' },
                    { name: 'Busang', bpsCode: '64.08.06' },
                    { name: 'Telen', bpsCode: '64.08.07' },
                    { name: 'Kombeng (Kongbeng)', bpsCode: '64.08.08' },
                    { name: 'Bengalon', bpsCode: '64.08.09' },
                    { name: 'Kaliorang', bpsCode: '64.08.10' },
                    { name: 'Sandaran', bpsCode: '64.08.11' },
                    { name: 'Sangatta Selatan', bpsCode: '64.08.12' },
                    { name: 'Teluk Pandan', bpsCode: '64.08.13' },
                    { name: 'Rantau Pulung', bpsCode: '64.08.14' },
                    { name: 'Kaubun', bpsCode: '64.08.15' },
                    { name: 'Karangan', bpsCode: '64.08.16' },
                    { name: 'Batu Ampar', bpsCode: '64.08.17' },
                    { name: 'Long Mesangat', bpsCode: '64.08.18' }
                ]
            }, {
                name: 'Penajam Paser Utara',
                bpscode: '64.09',
                districts: [
                    { name: 'Penajam', bpsCode: '64.09.01' },
                    { name: 'Waru', bpsCode: '64.09.02' },
                    { name: 'Babulu', bpsCode: '64.09.03' },
                    { name: 'Sepaku', bpsCode: '64.09.04' }
                ]
            }, {
                name: 'Mahakam Ulu',
                bpscode: '64.11',
                districts: [
                    { name: 'Long Bagun', bpsCode: '64.11.01' },
                    { name: 'Long Hubung', bpsCode: '64.11.02' },
                    { name: 'Laham', bpsCode: '64.11.03' },
                    { name: 'Long Apari', bpsCode: '64.11.04' },
                    { name: 'Long Pahangai', bpsCode: '64.11.05' }
                ]
            }, {
                name: 'Balikpapan',
                bpscode: '64.71',
                districts: [
                    { name: 'Balikpapan Timur', bpsCode: '64.71.01' },
                    { name: 'Balikpapan Barat', bpsCode: '64.71.02' },
                    { name: 'Balikpapan Utara', bpsCode: '64.71.03' },
                    { name: 'Balikpapan Tengah', bpsCode: '64.71.04' },
                    { name: 'Balikpapan Selatan', bpsCode: '64.71.05' },
                    { name: 'Balikpapan Kota', bpsCode: '64.71.06' }
                ]
            }, {
                name: 'Samarinda',
                bpscode: '64.72',
                districts: [
                    { name: 'Palaran', bpsCode: '64.72.01' },
                    { name: 'Samarinda Seberang', bpsCode: '64.72.02' },
                    { name: 'Samarinda Ulu', bpsCode: '64.72.03' },
                    { name: 'Samarinda Ilir', bpsCode: '64.72.04' },
                    { name: 'Samarinda Utara', bpsCode: '64.72.05' },
                    { name: 'Sungai Kunjang', bpsCode: '64.72.06' },
                    { name: 'Sambutan', bpsCode: '64.72.07' },
                    { name: 'Sungai Pinang', bpsCode: '64.72.08' },
                    { name: 'Samarinda Kota', bpsCode: '64.72.09' },
                    { name: 'Loa Janan Ilir', bpsCode: '64.72.10' }
                ]
            }, {
                name: 'Bontang',
                bpscode: '64.74',
                districts: [
                    { name: 'Bontang Utara', bpsCode: '64.74.01' },
                    { name: 'Bontang Selatan', bpsCode: '64.74.02' },
                    { name: 'Bontang Barat', bpsCode: '64.74.03' }
                ]
            }
        ]
    },
    KR: {
        regencies: [
            {
                name: 'Bintan',
                bpscode: '21.01',
                districts: [
                    { name: 'Gunung Kijang', bpsCode: '21.01.04' },
                    { name: 'Bintan Timur', bpsCode: '21.01.06' },
                    { name: 'Bintan Utara', bpsCode: '21.01.07' },
                    { name: 'Teluk Bintan', bpsCode: '21.01.08' },
                    { name: 'Tambelan', bpsCode: '21.01.09' },
                    { name: 'Telok Sebong (Teluk Sebong)', bpsCode: '21.01.10' },
                    { name: 'Toapaya', bpsCode: '21.01.12' },
                    { name: 'Mantang', bpsCode: '21.01.13' },
                    { name: 'Bintan Pesisir', bpsCode: '21.01.14' },
                    { name: 'Seri/Sri Kuala Lobam', bpsCode: '21.01.15' }
                ]
            }, {
                name: 'Karimun',
                bpscode: '21.02',
                districts: [
                    { name: 'Moro', bpsCode: '21.02.01' },
                    { name: 'Kundur', bpsCode: '21.02.02' },
                    { name: 'Karimun', bpsCode: '21.02.03' },
                    { name: 'Meral', bpsCode: '21.02.04' },
                    { name: 'Tebing', bpsCode: '21.02.05' },
                    { name: 'Buru', bpsCode: '21.02.06' },
                    { name: 'Kundur Utara', bpsCode: '21.02.07' },
                    { name: 'Kundur Barat', bpsCode: '21.02.08' },
                    { name: 'Durai', bpsCode: '21.02.09' },
                    { name: 'Meral Barat', bpsCode: '21.02.10' },
                    { name: 'Ungar', bpsCode: '21.02.11' },
                    { name: 'Belat', bpsCode: '21.02.12' }
                ]
            }, {
                name: 'Natuna',
                bpscode: '21.03',
                districts: [
                    { name: 'Midai', bpsCode: '21.03.04' },
                    { name: 'Bunguran Barat', bpsCode: '21.03.05' },
                    { name: 'Serasan', bpsCode: '21.03.06' },
                    { name: 'Bunguran Timur', bpsCode: '21.03.07' },
                    { name: 'Bunguran Utara', bpsCode: '21.03.08' },
                    { name: 'Subi', bpsCode: '21.03.09' },
                    { name: 'Pulau Laut', bpsCode: '21.03.10' },
                    { name: 'Pulau Tiga', bpsCode: '21.03.11' },
                    { name: 'Bunguran Timur Laut', bpsCode: '21.03.15' },
                    { name: 'Bunguran Tengah', bpsCode: '21.03.16' },
                    { name: 'Bunguran Selatan', bpsCode: '21.03.18' },
                    { name: 'Serasan Timur', bpsCode: '21.03.19' },
                    { name: 'Bunguran Batubi', bpsCode: '21.03.20' },
                    { name: 'Pulau Tiga Barat', bpsCode: '21.03.21' },
                    { name: 'Suak Midai', bpsCode: '21.03.22' }
                ]
            }, {
                name: 'Lingga',
                bpscode: '21.04',
                districts: [
                    { name: 'Singkep', bpsCode: '21.04.01' },
                    { name: 'Lingga', bpsCode: '21.04.02' },
                    { name: 'Senayang', bpsCode: '21.04.03' },
                    { name: 'Singkep Barat', bpsCode: '21.04.04' },
                    { name: 'Lingga Utara', bpsCode: '21.04.05' },
                    { name: 'Singkep Pesisir', bpsCode: '21.04.06' },
                    { name: 'Lingga Timur', bpsCode: '21.04.07' },
                    { name: 'Selayar', bpsCode: '21.04.08' },
                    { name: 'Singkep Selatan', bpsCode: '21.04.09' },
                    { name: 'Kepulauan Posek', bpsCode: '21.04.10' }
                ]
            }, {
                name: 'Kepulauan Anambas',
                bpscode: '21.05',
                districts: [
                    { name: 'Siantan', bpsCode: '21.05.01' },
                    { name: 'Palmatak', bpsCode: '21.05.02' },
                    { name: 'Siantan Timur', bpsCode: '21.05.03' },
                    { name: 'Siantan Selatan', bpsCode: '21.05.04' },
                    { name: 'Jemaja Timur', bpsCode: '21.05.05' },
                    { name: 'Jemaja', bpsCode: '21.05.06' },
                    { name: 'Siantan Tengah', bpsCode: '21.05.07' }
                ]
            }, {
                name: 'Batam',
                bpscode: '21.71',
                districts: [
                    { name: 'Belakang Padang', bpsCode: '21.71.01' },
                    { name: 'Batu Ampar', bpsCode: '21.71.02' },
                    { name: 'Sekupang', bpsCode: '21.71.03' },
                    { name: 'Nongsa', bpsCode: '21.71.04' },
                    { name: 'Bulang', bpsCode: '21.71.05' },
                    { name: 'Lubuk Baja', bpsCode: '21.71.06' },
                    { name: 'Sei/Sungai Beduk', bpsCode: '21.71.07' },
                    { name: 'Galang', bpsCode: '21.71.08' },
                    { name: 'Bengkong', bpsCode: '21.71.09' },
                    { name: 'Batam Kota', bpsCode: '21.71.10' },
                    { name: 'Sagulung', bpsCode: '21.71.11' },
                    { name: 'Batu Aji', bpsCode: '21.71.12' }
                ]
            }, {
                name: 'Tanjung Pinang',
                bpscode: '21.72',
                districts: [
                    { name: 'Tanjung Pinang Barat', bpsCode: '21.72.01' },
                    { name: 'Tanjung Pinang Timur', bpsCode: '21.72.02' },
                    { name: 'Tanjung Pinang Kota', bpsCode: '21.72.03' },
                    { name: 'Bukit Bestari', bpsCode: '21.72.04' }
                ]
            }
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