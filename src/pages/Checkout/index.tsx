import React, { useEffect } from "react";
import { useCart } from "@contexts/CartContext";
import { formatCurrency } from "@utils/formatCurrency";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import {
  CheckoutContainer,
  FormContainer,
  FormHeader,
  ContentWrapper,
  OrderSummary,
  PaymentOption,
  PaymentOptions,
  ShippingAddress,
  Title,
  SelectedProducts,
  SubmitButton,
} from "./style";
import { CartProduct } from "./components/CartProduct";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useNavigate } from "react-router-dom";

const ProductOrder = z.object({
  zip_code: z.string().regex(/^\d{5}-\d{3}$/),
  street: z.string(),
  house_number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string().regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/),
  state: z.string().regex(/^[A-Za-z]{2}$/),
  payment_options: z.enum(["credit", "debit", "money"]),
});

type ProductOrderType = z.infer<typeof ProductOrder>;

export interface OrderFormData {
  zip_code: string;
  street: string;
  house_number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  payment_options: string;
  orderSummary: {
    products: {
      name: string;
      quantity: number;
      price: number;
      subtotal: number;
    }[];
    deliveryFee: number;
    subtotal: number;
    total: number;
  };
}

export const Checkout = () => {
  const { cartItems, handleIsOrderSubmitted, isOrderSubmitted } = useCart();
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);
  const deliveryFee = subtotal * 0.12; // cobrando 12% para o frete
  const total = subtotal + deliveryFee;
  // React Hook Forms
  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit,
    register,
    watch,
  } = useForm<ProductOrderType>({
    resolver: zodResolver(ProductOrder),
    defaultValues: {
      payment_options: "credit",
    },
  });
  const navigate = useNavigate();

  const handleSubmitOrder = (data: ProductOrderType) => {
    const orderSummary = {
      products: cartItems.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        subtotal: item.quantity * item.product.price,
      })),
      deliveryFee,
      subtotal,
      total,
    };
    const formData = { ...data, orderSummary };
    handleIsOrderSubmitted(true);
    setTimeout(() => {
      navigate("/success", {
        state: {
          formData: formData as OrderFormData,
        },
      });
    }, 2000);
  };

  const formData = watch();
  // React Hook Forms
  return (
    <CheckoutContainer>
      <FormContainer action='' onSubmit={handleSubmit(handleSubmitOrder)}>
        <div>
          <Title>Complete seu pedido</Title>

          <ContentWrapper>
            <FormHeader>
              <MapPinLine size={22} />
              <div>
                <h1>Endereço de entrega</h1>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>

            <ShippingAddress>
              <input
                id='zip_code'
                type='text'
                placeholder='CEP'
                {...register("zip_code")}
              />
              {errors.zip_code && <p>{errors.zip_code.message}</p>}
              <input
                id='street'
                type='text'
                placeholder='Rua'
                {...register("street")}
              />
              {errors.street && <p>{errors.street.message}</p>}
              <div>
                <input
                  id='house_number'
                  type='text'
                  placeholder='Número'
                  {...register("house_number")}
                />
                {errors.house_number && <p>{errors.house_number.message}</p>}
                <input
                  id='complement'
                  type='text'
                  placeholder='Complemento'
                  {...register("complement")}
                />
                {errors.complement && <p>{errors.complement.message}</p>}
              </div>
              <div>
                <input
                  id='neighborhood'
                  type='text'
                  placeholder='Bairro'
                  {...register("neighborhood")}
                />
                {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
                <input
                  id='city'
                  type='text'
                  placeholder='Cidade'
                  {...register("city")}
                />
                {errors.city && <p>{errors.city.message}</p>}
                <input
                  id='state'
                  type='text'
                  placeholder='UF'
                  maxLength={2}
                  {...register("state")}
                />
                {errors.state && <p>{errors.state.message}</p>}
              </div>
            </ShippingAddress>
          </ContentWrapper>

          <ContentWrapper>
            <FormHeader>
              <CurrencyDollar size={22} />
              <div>
                <h1>Pagamento</h1>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeader>
            <Controller
              name='payment_options'
              control={control}
              render={({ field }) => {
                return (
                  <PaymentOptions
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <PaymentOption value='credit'>
                      <CreditCard size={16} />
                      <span>cartão de crédito</span>
                    </PaymentOption>
                    <PaymentOption value='debit'>
                      <Bank size={16} />
                      <span>cartão de débito</span>
                    </PaymentOption>
                    <PaymentOption value='money'>
                      <Money size={16} />
                      <span>dinheiro</span>
                    </PaymentOption>
                  </PaymentOptions>
                );
              }}
            />
          </ContentWrapper>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
        <div>
          <Title>Café selecionados</Title>
          <ContentWrapper>
            <SelectedProducts>
              {cartItems.map((item) => (
                <React.Fragment key={item.product.id}>
                  <CartProduct {...item.product} quantity={item.quantity} />
                  <div className='divider' />
                </React.Fragment>
              ))}
            </SelectedProducts>
            <OrderSummary>
              <div>
                <p>Total de itens</p>
                <p>{formatCurrency(subtotal)}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>{formatCurrency(deliveryFee)}</p>
              </div>
              <div>
                <p>Total</p>
                <p>{formatCurrency(total)}</p>
              </div>
            </OrderSummary>
            <SubmitButton disabled={isSubmitting} isLoading={isSubmitting}>
              {isSubmitting ? "carregando..." : "confirmar pedido"}
            </SubmitButton>
          </ContentWrapper>
        </div>
      </FormContainer>
    </CheckoutContainer>
  );
};
