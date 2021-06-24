<template>
    <div class="vue-template" >
        <form>
            <h3>Nome do usuário</h3>

            <div class="form-group">
                <label>"ID"</label>                
            </div>

            <div class="form-group">
                <label>"Email do usuário"</label>                
            </div>
               <div class="form-group">
                <label>Telefone</label>
                <input type="phone" class="form-control form-control-lg" />
            </div>

               <div class="form-group">
                <label>Data de nascimento</label>
                <input type="Date" class="form-control form-control-lg" />
            </div>

               <div class="form-group">
                <label>Endereço</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Confirmar</button>


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