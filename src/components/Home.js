import Axios from 'axios';
import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Products from './Products';
import QuickView from './QuickView';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: [],
            totalItems: 0,
            totalAmount: 0,
            term: "",
            category: "",
            cartBounce: false,
            quantity: 1,
            quickViewProduct: {},
            modalActive: false,
            showCart: false
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleMobileSearch = this.handleMobileSearch.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.sumTotalItems = this.sumTotalItems.bind(this);
        this.sumTotalAmount = this.sumTotalAmount.bind(this);
        this.checkProduct = this.checkProduct.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // Fetch Initial Set of Products from external API
    getProducts() {
        let url =
            "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
        Axios.get(url).then(response => {
            this.setState({
                products: response.data
            });
        });
    }
    componentWillMount() {
        this.getProducts();
    }

    // Search by Keyword
    handleSearch(event) {
        this.setState({ term: event.target.value });
    }
    // Mobile Search Reset
    handleMobileSearch() {
        this.setState({ term: "" });
    }
    // Filter by Category
    handleCategory(event) {
        this.setState({ category: event.target.value });
        console.log(this.state.category);
    }
    // Add to Cart
    handleAddToCart(selectedProducts) {

        // RECORD EVENT FOR PRODUCTS ADDED TO CART
        const productProps = {
            "productID": selectedProducts.id || undefined,
            "quantity": selectedProducts.quantity || undefined,
            "image": selectedProducts.image || undefined,
            "name": selectedProducts.name || undefined,
            "price": selectedProducts.price || undefined
        }
        clevertap.event.push("Product added to cart", productProps);
        this.props.showToast(`CleverTap Event Recorded: ${selectedProducts.name} added to cart!`)

        let cartItem = this.state.cart;
        let productID = selectedProducts.id;
        let productQty = selectedProducts.quantity;
        if (this.checkProduct(productID)) {
            console.log("hi");
            let index = cartItem.findIndex(x => x.id == productID);
            cartItem[index].quantity =
                Number(cartItem[index].quantity) + Number(productQty);
            this.setState({
                cart: cartItem
            });
        } else {
            cartItem.push(selectedProducts);
        }
        this.setState({
            cart: cartItem,
            cartBounce: true
        });
        setTimeout(
            function () {
                this.setState({
                    cartBounce: false,
                    quantity: 1
                });
                console.log(this.state.quantity);
                console.log(this.state.cart);
            }.bind(this),
            1000
        );
        this.sumTotalItems(this.state.cart);
        this.sumTotalAmount(this.state.cart);
    }

    handleRemoveAllProducts = () => {
        console.log("das")
        const initialState = {
            cart: [],
            totalItems: 0,
            totalAmount: 0,
            term: "",
            category: "",
            cartBounce: false,
            quantity: 1,
            quickViewProduct: {},
            modalActive: false,
            showCart: false
        }

        this.setState(initialState, () => {
            this.sumTotalItems(this.state.cart)
            this.sumTotalAmount(this.state.cart)
        })
    }

    handleRemoveProduct(id, e) {
        let cart = this.state.cart;
        let index = cart.findIndex(x => x.id == id);
        cart.splice(index, 1);
        this.setState({
            cart: cart
        });
        this.sumTotalItems(this.state.cart);
        this.sumTotalAmount(this.state.cart);
        e.preventDefault();
    }
    checkProduct(productID) {
        let cart = this.state.cart;
        return cart.some(function (item) {
            return item.id === productID;
        });
    }
    sumTotalItems() {
        let total = 0;
        let cart = this.state.cart;
        total = cart.length;
        this.setState({
            totalItems: total
        });
    }
    sumTotalAmount() {
        let total = 0;
        let cart = this.state.cart;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].price * parseInt(cart[i].quantity);
        }
        this.setState({
            totalAmount: total
        });
    }

    //Reset Quantity
    updateQuantity(qty) {
        console.log("quantity added...");
        this.setState({
            quantity: qty
        });
    }
    // Open Modal
    openModal(product) {
        this.setState({
            quickViewProduct: product,
            modalActive: true
        });
    }
    // Close Modal
    closeModal() {
        this.setState({
            modalActive: false
        });
    }

    render() {
        return (
            <div className="container">
                <Header
                    showToast={this.props.showToast}
                    showCart={this.state.showCart}
                    cartBounce={this.state.cartBounce}
                    total={this.state.totalAmount}
                    totalItems={this.state.totalItems}
                    cartItems={this.state.cart}
                    removeProduct={this.handleRemoveProduct}
                    removeAllProducts={this.handleRemoveAllProducts}
                    handleSearch={this.handleSearch}
                    handleMobileSearch={this.handleMobileSearch}
                    handleCategory={this.handleCategory}
                    categoryTerm={this.state.category}
                    updateQuantity={this.updateQuantity}
                    productQuantity={this.state.moq}
                />
                <Products
                    productsList={this.state.products}
                    searchTerm={this.state.term}
                    addToCart={this.handleAddToCart}
                    productQuantity={this.state.quantity}
                    updateQuantity={this.updateQuantity}
                    openModal={this.openModal}
                />
                <Footer />
                <QuickView
                    product={this.state.quickViewProduct}
                    openModal={this.state.modalActive}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default withRouter(Home);