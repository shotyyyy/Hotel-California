PGDMP  .                    |            postgres    16.2    16.2 $    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     |   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4840                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16616    booker    TABLE       CREATE TABLE public.booker (
    id bigint NOT NULL,
    first_name character varying,
    middle_name character varying,
    last_name character varying,
    email character varying,
    room_id bigint,
    tel_num character varying,
    passport character varying
);
    DROP TABLE public.booker;
       public         heap    postgres    false            �            1259    16638    guests_stack    TABLE     m   CREATE TABLE public.guests_stack (
    id bigint NOT NULL,
    guests_num bigint,
    anychildren boolean
);
     DROP TABLE public.guests_stack;
       public         heap    postgres    false            �            1259    16650    hotel    TABLE     �   CREATE TABLE public.hotel (
    id bigint NOT NULL,
    rooms_num bigint,
    staff_num bigint,
    max_guests bigint,
    restaurants bigint
);
    DROP TABLE public.hotel;
       public         heap    postgres    false            �            1259    16623    order    TABLE     �   CREATE TABLE public."order" (
    id bigint NOT NULL,
    booker_id bigint,
    room_id bigint,
    guests_stack_id bigint,
    check_in date,
    check_out date
);
    DROP TABLE public."order";
       public         heap    postgres    false            �            1259    16633    payment    TABLE     r   CREATE TABLE public.payment (
    id bigint NOT NULL,
    room_id bigint,
    booker_id bigint,
    sum bigint
);
    DROP TABLE public.payment;
       public         heap    postgres    false            �            1259    16628    room    TABLE     �   CREATE TABLE public.room (
    id bigint NOT NULL,
    square bigint,
    quality bigint,
    price bigint,
    guests_num bigint,
    available boolean DEFAULT false
);
    DROP TABLE public.room;
       public         heap    postgres    false            �            1259    16643    staff    TABLE     �   CREATE TABLE public.staff (
    id bigint NOT NULL,
    first_name character varying,
    middle_name character varying,
    last_name character varying,
    passport character varying,
    phone_num character varying
);
    DROP TABLE public.staff;
       public         heap    postgres    false            �          0    16616    booker 
   TABLE DATA           k   COPY public.booker (id, first_name, middle_name, last_name, email, room_id, tel_num, passport) FROM stdin;
    public          postgres    false    216   '       �          0    16638    guests_stack 
   TABLE DATA           C   COPY public.guests_stack (id, guests_num, anychildren) FROM stdin;
    public          postgres    false    220   F(       �          0    16650    hotel 
   TABLE DATA           R   COPY public.hotel (id, rooms_num, staff_num, max_guests, restaurants) FROM stdin;
    public          postgres    false    222   c(       �          0    16623    order 
   TABLE DATA           _   COPY public."order" (id, booker_id, room_id, guests_stack_id, check_in, check_out) FROM stdin;
    public          postgres    false    217   �(       �          0    16633    payment 
   TABLE DATA           >   COPY public.payment (id, room_id, booker_id, sum) FROM stdin;
    public          postgres    false    219   �(       �          0    16628    room 
   TABLE DATA           Q   COPY public.room (id, square, quality, price, guests_num, available) FROM stdin;
    public          postgres    false    218   E)       �          0    16643    staff 
   TABLE DATA           \   COPY public.staff (id, first_name, middle_name, last_name, passport, phone_num) FROM stdin;
    public          postgres    false    221   �)       >           2606    24598    payment book_id 
   CONSTRAINT     c   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT book_id UNIQUE (booker_id) INCLUDE (booker_id);
 9   ALTER TABLE ONLY public.payment DROP CONSTRAINT book_id;
       public            postgres    false    219            6           2606    24591    order booker_id 
   CONSTRAINT     e   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT booker_id UNIQUE (booker_id) INCLUDE (booker_id);
 ;   ALTER TABLE ONLY public."order" DROP CONSTRAINT booker_id;
       public            postgres    false    217            4           2606    16622    booker booker_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.booker
    ADD CONSTRAINT booker_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.booker DROP CONSTRAINT booker_pkey;
       public            postgres    false    216            D           2606    16642    guests_stack guests_stack_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.guests_stack
    ADD CONSTRAINT guests_stack_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.guests_stack DROP CONSTRAINT guests_stack_pkey;
       public            postgres    false    220            H           2606    16654    hotel hotel_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.hotel DROP CONSTRAINT hotel_pkey;
       public            postgres    false    222            8           2606    16627    order order_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."order" DROP CONSTRAINT order_pkey;
       public            postgres    false    217            @           2606    24584    payment payment_id 
   CONSTRAINT     b   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_id UNIQUE (room_id) INCLUDE (room_id);
 <   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_id;
       public            postgres    false    219            B           2606    16637    payment payment_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_pkey;
       public            postgres    false    219            :           2606    24577    order room_id 
   CONSTRAINT     _   ALTER TABLE ONLY public."order"
    ADD CONSTRAINT room_id UNIQUE (room_id) INCLUDE (room_id);
 9   ALTER TABLE ONLY public."order" DROP CONSTRAINT room_id;
       public            postgres    false    217            <           2606    16632    room room_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.room
    ADD CONSTRAINT room_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.room DROP CONSTRAINT room_pkey;
       public            postgres    false    218            F           2606    16649    staff staff_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT staff_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.staff DROP CONSTRAINT staff_pkey;
       public            postgres    false    221            K           2606    24578    room order_id    FK CONSTRAINT     x   ALTER TABLE ONLY public.room
    ADD CONSTRAINT order_id FOREIGN KEY (id) REFERENCES public."order"(room_id) NOT VALID;
 7   ALTER TABLE ONLY public.room DROP CONSTRAINT order_id;
       public          postgres    false    218    217    4666            I           2606    24599    booker order_id    FK CONSTRAINT     |   ALTER TABLE ONLY public.booker
    ADD CONSTRAINT order_id FOREIGN KEY (id) REFERENCES public."order"(booker_id) NOT VALID;
 9   ALTER TABLE ONLY public.booker DROP CONSTRAINT order_id;
       public          postgres    false    4662    217    216            L           2606    24585    room payment_id    FK CONSTRAINT     z   ALTER TABLE ONLY public.room
    ADD CONSTRAINT payment_id FOREIGN KEY (id) REFERENCES public.payment(room_id) NOT VALID;
 9   ALTER TABLE ONLY public.room DROP CONSTRAINT payment_id;
       public          postgres    false    4672    218    219            J           2606    24604    booker payment_id    FK CONSTRAINT     ~   ALTER TABLE ONLY public.booker
    ADD CONSTRAINT payment_id FOREIGN KEY (id) REFERENCES public.payment(booker_id) NOT VALID;
 ;   ALTER TABLE ONLY public.booker DROP CONSTRAINT payment_id;
       public          postgres    false    219    216    4670            �     x�]�1O�0���c5>��l��Ѕ,,��Wq�D��sN��p���O���S?b7%K��q��)=��X>��OSA6d��к�Q�:e��)��<�����ZQ�,���F(҄A��|�c��x�Ðc�Qn��ލ����<��=�;c�k��.~���TuUW��<6-� ���^y�%�x�l�\���u
�!�m�C��L�X)�>�4�Yc;v�Rs����]�8�$���Ŭ,�J~��x��#R����+��]�O��rS�����޵R���[      �      x������ � �      �      x�3�44���4��4����� �      �   \   x�m��	�0C��.)����d�9�@�(��C��$�&e��y��`4Yu�1����5�j+"e��R����_���8i�U��o۲n���	%�      �   <   x�ʹ 1��Xs�k7���8`�l� :��*N����t|H�jQ��;��e���D�:7�      �   o   x�e��1��PL��,���S��WƊic_�`�0S>Ʒ82�\0�R�8a0�Lyl�V`ۯ�Z�����(��҈V4R�2�y_f��!v��Ɣ8d܏��z��Qj'      �   S  x�=�Mo�0��c&�	�ZMB�k�]vɨ�D
I�:��g�vA=6�m	M�_h���cHTY�F.5�u��TڔSp�}����Ӈ�=c)xAt�5�p��`��s�GX�*R3�m��8��p��#���j#��J���1g%���1�!����b��2P�uU�5{�`4��W�Ki�+�->����%�)v���M�\\�� ��6��׳���1�����̓�>��+�K�
�8'2���1��js�-�����0.�\�i�+�~�-ݨ��������A	��{
$�TJKm�U!����A���Iq�K�� �%��P�����c���w     