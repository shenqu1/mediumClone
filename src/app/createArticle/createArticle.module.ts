import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {createArticleComponent} from './components/createArticle/createArticle.component'
import {CreateArticleService} from './services/createArticle.service'
import {CreateArticleEffect} from './store/effects/createArticle.effect'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'articles/new',
    component: createArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers),
  ],
  declarations: [createArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
