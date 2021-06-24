<template>
    <div class="vue-tempalte">
        <form>
            <h3>Entrar</h3>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Senha</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <router-link class="btn btn-dark btn-lg btn-block" to="/Profile">Entrar</router-link>
          

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Esqueceu sua senha?</router-link>
            </p>

            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>